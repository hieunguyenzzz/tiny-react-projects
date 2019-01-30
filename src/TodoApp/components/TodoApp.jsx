import React from 'react';
import Footer from './Footer'
import InputTodo from './InputTodo'
import VisibleTodoList from './VisibleTodoList'

const TodoApp = ({ match }) => {
        return (
            <>
                <InputTodo/>
                <VisibleTodoList filter={match.params.filter || 'all'}/>
                <Footer/>
            </>
        )
}

export default TodoApp;