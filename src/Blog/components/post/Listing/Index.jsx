import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import List from "./List";
import HashTag from "./HashTag";

class Page extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={13}>
                    <List />
                </Grid.Column>
                <Grid.Column width={3}>
                    <HashTag/>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Page;