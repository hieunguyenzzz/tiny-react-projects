import {createStore} from 'redux';
import fakeBackend from './api/index';
import RootReducer from './reducer/index'
import {SHOW_ALL} from "./instant";

const dispatchWithLog = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        console.log('prev state', store.getState());
        const nextState = rawDispatch(action);
        console.log('action', action);
        console.log('after state', store.getState());
        return nextState;
    }
}

const dispatchWithPomiseAction = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(promiseAction => rawDispatch(promiseAction));
        } else {
            return rawDispatch(action);
        }
    }
}

const configureStore = () => {
    const store = createStore(RootReducer);

    store.dispatch = dispatchWithLog(store);
    store.dispatch = dispatchWithPomiseAction(store);
    return store;

}


export default configureStore;

