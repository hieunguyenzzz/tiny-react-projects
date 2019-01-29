import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import Store from './store';
import {ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTER, SHOW_ALL, SHOW_TODO, SHOW_DONE} from './instant';
import {connect} from 'react-redux';

// extracting action creators from the components to keep code maintainable and self-documenting

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

const toggleTodo = (id) => {
    return {type: TOGGLE_TODO, id}
}

const setVisibility = (visibility) => {
    return {type: VISIBILITY_FILTER, visibility}
}


const Link = ({active, children, onFilterLinkClick}) => {
    return (
        <>
            {active ? <span>{children}</span> :
                <a href="#" onClick={onFilterLinkClick}>
                    {children}
                </a>
            }
        </>
    );
}

// the ownProps is props of the <Link />
const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.visibility === state.visibility
    }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onFilterLinkClick: () => Store.dispatch(setVisibility(ownProps.visibility))
    }
}

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

class Footer extends Component {
    render() {
        return (
            <>
                <FilterLink visibility={SHOW_ALL}> SHOW ALL </FilterLink> |
                <FilterLink visibility={SHOW_DONE}> SHOW DONE </FilterLink> |
                <FilterLink visibility={SHOW_TODO}> SHOW TODO </FilterLink>
            </>
        )
    }
}


class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.todoInput = React.createRef();
    }

    render() {
        const {dispatch} = this.props;
        return (
            <>
                <input type="text" ref={this.todoInput}/>
                <button onClick={() => {
                    dispatch(addTodo(this.todoInput.current.value))
                    this.todoInput.current.value = '';
                }}>Add Todo
                </button>
            </>
        );
    }
}

InputTodo = connect()(InputTodo);

const Todo = ({id, complete, text, onClick}) => {
    return (
        <li style={{textDecoration: complete ? 'line-through' : 'none'}}
            onClick={onClick}>
            {text}
        </li>
    );
}

const TodoList = ({todos, onTodoClick}) => {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        })
    )
}

const getVisibleTodos = ({todos, visibility}) => {
    switch (visibility) {
        case SHOW_DONE:
            return todos.filter(t => t.complete);
        case  SHOW_TODO:
            return todos.filter(t => !t.complete);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

class TodoApp extends Component {
    render() {
        return (
            <>
                <InputTodo/>
                <VisibleTodoList/>
                <Footer/>
            </>
        )
    }
}

export default TodoApp;