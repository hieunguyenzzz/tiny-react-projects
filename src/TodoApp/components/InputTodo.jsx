import React, {Component} from 'react';
import {addTodo} from "../action/actions";
import {connect} from "react-redux";

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.todoInput = React.createRef();
    }

    render() {
        const {dispatch} = this.props;
        return (
            <>
                <input type="text" ref={this.todoInput}/>
                <button onClick={() => {
                    dispatch(addTodo(this.todoInput.current.value))
                    this.todoInput.current.value = '';
                }}>Add Todo
                </button>
            </>
        );
    }
}

export default connect()(InputTodo);