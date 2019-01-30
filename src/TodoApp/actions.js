import {ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTER} from "./instant";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const toggleTodo = (id) => {
    return {type: TOGGLE_TODO, id}
}
