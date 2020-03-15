import React, {Component} from 'react';
import Login from './login';
import { connect } from "react-redux";
import {changeUserStoreSettings, login} from "../../actions/user";

class LoginContainer extends Component {
    render(){
        return (
            <Login
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => {
  return {
      loggingIn: state.user.loggingIn,
      logInResponse: state.user.logInResponse
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      login: (payload) => {
          dispatch(login(payload))
      },
      changeUserStoreSettings: (payload) => {
          dispatch(changeUserStoreSettings(payload))
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);