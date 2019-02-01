import {ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO} from "../instant";
import v4 from "node-uuid";
import fakeBackend from "../api";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: v4(),
        text
    }
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
