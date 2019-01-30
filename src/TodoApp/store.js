import {createStore} from 'redux';
import RootReducer from './reducers'
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash/throttle';

const persistedState = loadState();
const configureStore = () => {
    const store = createStore(RootReducer, {
        todos: persistedState.todos
    });

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000))

    return store;

}

export default configureStore;

