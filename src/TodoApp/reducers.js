import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTER, SHOW_ALL} from './instant'

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


export default combineReducers({
    todos
})


