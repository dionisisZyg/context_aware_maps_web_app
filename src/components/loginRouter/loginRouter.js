import React, {Component} from 'react';
import {  connect } from 'react-redux';
import {Route, withRouter} from "react-router";
import LoginContainer from "../login/loginContainer";
import LayoutContainer from '../layout/layout/layoutContainer'

class LoginRouter extends Component {
    render(){
        let baseRouteComponent ;
        if(this.props.isLoggedIn) baseRouteComponent = () => <LayoutContainer {...this.props}/>;
        else baseRouteComponent = () => <LoginContainer/>;
        return (
            <div>
                <Route path="/" component={baseRouteComponent}/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.loggedInUser.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRouter));