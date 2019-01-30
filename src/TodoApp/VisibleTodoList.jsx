import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {toggleTodo} from "./actions";
import {SHOW_DONE, SHOW_TODO} from "./instant";
import {connect} from "react-redux";

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

export default VisibleTodoList;