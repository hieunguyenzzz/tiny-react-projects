import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import Post from "./Post";


class List extends Component {
    render() {
        return (
            <>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </>
        );
    }
}

export default List;