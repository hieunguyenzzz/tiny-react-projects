import React from 'react';
import {toggleTodo} from "../action/actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import {getVisibleTodos} from '../reducer/index'

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

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;