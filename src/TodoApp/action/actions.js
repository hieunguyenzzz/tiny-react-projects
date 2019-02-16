import {ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO} from "../instant";
import v4 from "node-uuid";
import fakeBackend from "../api";
import {postTodo} from "../api"

export const addTodo = (text) => (dispatch) => {
    const todo = {
        id: v4(),
        text,
        complete:false
    }
    return postTodo(todo).then(() => dispatch(loadTodos('all')))
}

export const loadTodos = (filter) => (dispath) => {
    return fakeBackend(filter).then(response => dispath(receiveTodos(filter, response)))
}

const receiveTodos = (filter, response) => {
    return {
        type: RECEIVE_TODOS,
        filter,
        response
    }
}

export const toggleTodo = (id) => {
    return {type: TOGGLE_TODO, id}
}
