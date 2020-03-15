import React, {Component} from 'react';
import {connect} from 'react-redux';
import Content from "./content";

class ContentContainer extends Component {
    render(){
        return (
            <Content/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);