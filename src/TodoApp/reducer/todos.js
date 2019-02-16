import {ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO} from '../instant'
import todo from './todo';
import {combineReducers} from "redux";
const initialState = {};


const byId = (todos = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {...todos,
                [action.id]: todo(todos[action.id], action)
            };
        case RECEIVE_TODOS:
            const nextState = {...todos};
            action.response.forEach(item => {
                nextState[item.id] = item
            })
            return nextState;
        default:
            return todos;
    }
}

const allIdsByFilter = (visibility) => (state = [], action) => {
    if (action.filter !== visibility) {
        return state;
    }

    switch (action.type) {
        case RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}



const todos = combineReducers({
    byId,
    complete: allIdsByFilter('complete'),
    todo: allIdsByFilter('todo'),
    all: allIdsByFilter('all')
})

export const getVisibleTodos = (state, visibility) => {
    return state[visibility].map(id => state.byId[id]);
}


export default todos;


