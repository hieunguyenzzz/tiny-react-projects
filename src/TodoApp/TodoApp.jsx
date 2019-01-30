import React, {Component} from 'react';
import Footer from './Footer'
import InputTodo from './InputTodo'
import VisibleTodoList from './VisibleTodoList'

class TodoApp extends Component {
    render() {
        return (
            <>
                <InputTodo/>
                <VisibleTodoList/>
                <Footer/>
            </>
        )
    }
}

export default TodoApp;