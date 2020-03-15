import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./header";

class HeaderContainer extends Component {
    render(){
        return (
            <Header/>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);