import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {Button, Container, Menu} from "semantic-ui-react";
import {Link, NavLink, withRouter} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Menu fixed="top">
                <Container>
                    <Menu.Item header as={Link} to="/listing">
                        <img src="/assets/logo.png" alt="logo"/>
                        Random thought
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/listing" name="Post Listing"/>
                    <Menu.Item>
                        <Button as={Link} to={`createPost`} floated="right" positive inverted content="Create Post"/>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default withRouter(NavBar);