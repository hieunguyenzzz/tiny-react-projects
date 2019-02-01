import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import RootReducer from './reducer/index'


const configureStore = () => {
    const middleWares = [promise];
    return createStore(RootReducer, applyMiddleware(...middleWares));
}


export default configureStore;

