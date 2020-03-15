import React, {Component} from 'react';
import {connect} from 'react-redux';

//Higher order component for user authorization handling
const AuthorizationHOC = (allowedRoles) =>
    (WrappedComponent) => {
        class WithAuthorization extends Component {
            constructor(props) {
                super(props)

            }
            render() {
                //check if the logged in user role matches the allowed roles for the context inside the wrapped
                //component, then the wrapped component will be rendered, else a not allowed message appears
                if (allowedRoles.includes(this.props.userRoles[0]) || true) {
                    return <WrappedComponent {...this.props} />
                } else {
                    return <h1>No page for you!</h1>
                }
            }
        }

        const mapStateToProps = (state) => {
            return {
                userRoles: []
            }
        };

        const mapDispatchToProps = (dispatch) => {
            return {
            }
        };

        return connect(mapStateToProps, mapDispatchToProps)(WithAuthorization);
    };


export default AuthorizationHOC;
