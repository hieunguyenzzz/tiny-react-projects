import {ADD_TODO, SHOW_DONE, SHOW_TODO, TOGGLE_TODO} from '../instant'
import todo from './todo';
import {combineReducers} from "redux";
const initialState = {};


const byId = (todos = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {...todos,
                [action.id]: todo(todos[action.id], action)
            }
        default:
            return todos;
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.id]
        default:
            return state;
    }
}

const todos = combineReducers({
    byId,
    allIds
})

const getAllTodos = (state) => state.allIds.map(id => state.byId[id]);


export const getVisibleTodos = (state, visibility) => {
    const allTodos = getAllTodos(state);
    switch (visibility) {
        case SHOW_DONE:
            return allTodos.filter(t => t.complete);
        case  SHOW_TODO:
            return allTodos.filter(t => !t.complete);
        default:
            return allTodos;
    }
}


export default todos;


