import React from 'react';
import {Route, Switch} from 'react-router';
import AuthorizationHOC from '../../auth/authorizationHOC';
import RoutesContainer from "../../routes/routesContainer"

const Content = (props) => {
    return (
        <Switch>
            <Route path="/routes" component={AuthorizationHOC(['admin', 'manager'])(RoutesContainer)}/>
        </Switch>
    )
};

export default Content;