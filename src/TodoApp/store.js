import {createStore} from 'redux';
import RootReducer from './reducer/index'

const dispatchWithLog = (store) => (next) => (action) => {
    console.log('prev state', store.getState());
    const nextState = next(action);
    console.log('action', action);
    console.log('after state', store.getState());
    return nextState;
}

const dispatchWithPomiseAction = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(promiseAction => next(promiseAction));
    } else {
        return next(action);
    }
}

const applyMiddleware = (store, middlewares) => {
    middlewares.forEach((middleware) => {
        store.dispatch = middleware(store)(store.dispatch);
    })
}

const configureStore = () => {
    const store = createStore(RootReducer);
    const middleWares = [];

    middleWares.push(dispatchWithLog);
    middleWares.push(dispatchWithPomiseAction);
    applyMiddleware(store, middleWares);

    return store;

}


export default configureStore;

