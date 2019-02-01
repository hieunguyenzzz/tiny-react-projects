import React from 'react';
import * as actions from "../action/actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import {getVisibleTodos} from '../reducer/index'
import fakeBackend from '../api/index';

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


const mapStateToProps = (state, {filter}) => {
    return {
        todos: getVisibleTodos(state, filter === undefined ? 'all' : filter)
    }
}

class VisibleTodoList extends React.Component {
    componentDidMount() {
        this.loadTodos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.loadTodos();
        }
    }

    loadTodos() {
        const {filter, loadTodos} = this.props;
        loadTodos(filter);
    }

    render() {
        const {toggleTodo, ...rest} = this.props;
        return (
            <>
                <TodoList {...rest} onTodoClick={toggleTodo} />
            </>
        )
    }
}


VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;