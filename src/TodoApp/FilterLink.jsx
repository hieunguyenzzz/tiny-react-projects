import {connect} from "react-redux";
import {setVisibility} from "./actions";
import Link from "./Link";

// the ownProps is props of the <Link />
const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.visibility === state.visibility
    }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onFilterLinkClick: () => dispatch(setVisibility(ownProps.visibility))
    }
}

export default connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);