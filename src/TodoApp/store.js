import {createStore} from 'redux';
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash/throttle';
import RootReducer from './reducer/index'

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

