import React from 'react';
import {Provider} from "react-redux";
import TodoApp from "./TodoApp";
import {Route, Switch} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/(.*)" render={() => (
                    <>
                        <Switch>
                            <Route path="/" component={TodoApp}/>
                        </Switch>
                    </>
                )}>

                </Route>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;