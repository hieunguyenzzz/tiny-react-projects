import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducer/index'

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action);

}

const logging = (store) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = () => {
    const middleWares = [thunk, logging];
    return createStore(RootReducer, applyMiddleware(...middleWares));
}


export default configureStore;

