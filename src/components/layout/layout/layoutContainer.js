import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from "./layout";
import {logout} from "../../../actions/user";

class LayoutContainer extends Component {
    render(){
        return (
            <Layout {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);