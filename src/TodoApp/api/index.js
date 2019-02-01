import {SHOW_TODO, SHOW_DONE, SHOW_ALL} from '../instant';

const fakeDatabase = {
    todos: [{
        id: 1,
        text: "Clean the room",
        complete: false
    },
    {
        id: 2,
        text: "Feed the dog",
        complete: true
    }]
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const fakeBackend = (filter) => {
    return delay(500).then(() => {
        switch (filter) {
            case SHOW_DONE:
                return fakeDatabase.todos.filter(todo => todo.complete);
            case SHOW_TODO:
                return fakeDatabase.todos.filter(todo => !todo.complete);
            case SHOW_ALL:
                return fakeDatabase.todos;
            default:
                throw new Error(`unknow filter: ${filter}`);
        }
    })
}

export default fakeBackend;
