import React from 'react';
import {} from 'semantic-ui-react';
import Store from "./store";
import {setVisibility} from "./actions";
import {connect} from "react-redux";

const Link = ({active, children, onFilterLinkClick}) => {
    return (
        <>
            {active ? <span>{children}</span> :
                <a href="#" onClick={onFilterLinkClick}>
                    {children}
                </a>
            }
        </>
    );
}

// the ownProps is props of the <Link />
const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.visibility === state.visibility
    }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onFilterLinkClick: () => Store.dispatch(setVisibility(ownProps.visibility))
    }
}

export default connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);