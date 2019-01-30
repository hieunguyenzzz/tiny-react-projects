import {createStore} from 'redux';
import RootReducer from './reducers'
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();
const store = createStore(RootReducer, {
    todos: persistedState.todos
});

store.subscribe(() => {
    saveState(store.getState());
})

export default store;

