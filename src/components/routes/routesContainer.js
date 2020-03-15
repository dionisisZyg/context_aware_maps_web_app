import React, { Component } from "react";
import Routes from "./routes";
import {connect} from "react-redux";
import {fetchUploadedRoutes} from "../../actions/routes";

class RoutesContainer extends Component {

    componentDidMount(){
        this.props.fetchUploadedRoutes({filter: {include: "points"}});
    }

    render(){
        return (
            <div>
                <Routes
                    {...this.props}
                />
            </div>
        )

    }
}

const mapStateToProps = (state) => {
   return {
       fetchingRoutes: state.routes.fetchingRoutes,
       uploadedRoutes: state.routes.uploadedRoutes
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
       fetchUploadedRoutes: (payload) => {
           dispatch(fetchUploadedRoutes(payload))
       }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);