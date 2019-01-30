import React, {Component} from 'react';
import {SHOW_ALL, SHOW_DONE, SHOW_TODO} from "../instant";
import FilterLink from './FilterLink';

class Footer extends Component {
    render() {
        return (
            <>
                <FilterLink filter={SHOW_ALL}> SHOW ALL </FilterLink> |
                <FilterLink filter={SHOW_DONE}> SHOW DONE </FilterLink> |
                <FilterLink filter={SHOW_TODO}> SHOW TODO </FilterLink>
            </>
        )
    }
}
export default Footer;