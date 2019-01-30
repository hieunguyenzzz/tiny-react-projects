import React from 'react';
import {toggleTodo} from "../action/actions";
import {SHOW_DONE, SHOW_TODO} from "../instant";
import {connect} from "react-redux";
import {withRouter} from 'react-router';

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

const getVisibleTodos = (todos, visibility) => {
    switch (visibility) {
        case SHOW_DONE:
            return todos.filter(t => t.complete);
        case  SHOW_TODO:
            return todos.filter(t => !t.complete);
        default:
            return todos;
    }
}

const mapStateToProps = (state, {filter}) => {
    return {
        todos: getVisibleTodos(state.todos, filter === undefined ? 'all' : filter)
    }
}

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;