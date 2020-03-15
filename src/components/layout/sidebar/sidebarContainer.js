import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from "./sidebar";

class SideBarContainer extends Component {
    render(){
        return (
            <Sidebar/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);