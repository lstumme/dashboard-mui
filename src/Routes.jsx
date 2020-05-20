import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import {
    MinimalLayout
} from './layouts'
import {
    RouteWithLayout
} from './components'
import {
    NotFound as NotFoundView
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/not-found" />
            <RouteWithLayout
                component={NotFoundView}
                exact
                layout={MinimalLayout}
                path="/not-found"
            />
            <Redirect to="/not-found" />
        </Switch>
    );
}

export default Routes;