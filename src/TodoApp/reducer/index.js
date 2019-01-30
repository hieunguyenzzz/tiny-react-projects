import {combineReducers} from 'redux';
import todos, * as todoReducer from './todos'

const RootReducer = combineReducers({
    todos
});

export const getVisibleTodos = (state, dispach) => {
    return todoReducer.getVisibleTodos(state.todos, dispach);
}

export default RootReducer;