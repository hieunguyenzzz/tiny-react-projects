import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import RootReducer from './reducer/index'

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action);

}
const configureStore = () => {
    const middleWares = [thunk];
    return createStore(RootReducer, applyMiddleware(...middleWares));
}


export default configureStore;

