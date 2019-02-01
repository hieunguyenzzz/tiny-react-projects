import {ADD_TODO, TOGGLE_TODO} from "../instant";

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                complete: false
            }
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {complete: !state.complete})
        default:
            return state;

    }
}

export default todo;