import React from 'react';
import {Provider} from "react-redux";
import TodoApp from "./TodoApp";
import {Route} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/:filter?" render={props => <TodoApp {...props} />}/>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;