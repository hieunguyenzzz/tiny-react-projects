
import {ADD_TODO, SHOW_DONE, SHOW_TODO, TOGGLE_TODO} from '../instant'

const initialState = {};

const todos = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {
                id: todos.reduce((currentId, todo) => {
                    return currentId < todo.id ? todo.id : currentId
                }, 0) + 1,
                text: action.text,
                complete: false
            }];
        case TOGGLE_TODO:
            return [...todos.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return Object.assign({}, todo, {complete: !todo.complete})
            })]
        default:
            return todos;
    }
}

export const getVisibleTodos = (state, visibility) => {
    switch (visibility) {
        case SHOW_DONE:
            return state.filter(t => t.complete);
        case  SHOW_TODO:
            return state.filter(t => !t.complete);
        default:
            return state;
    }
}


export default todos;


