import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {SHOW_ALL, SHOW_DONE, SHOW_TODO} from "./instant";
import FilterLink from './Link';

class Footer extends Component {
    render() {
        return (
            <>
                <FilterLink visibility={SHOW_ALL}> SHOW ALL </FilterLink> |
                <FilterLink visibility={SHOW_DONE}> SHOW DONE </FilterLink> |
                <FilterLink visibility={SHOW_TODO}> SHOW TODO </FilterLink>
            </>
        )
    }
}
export default Footer;