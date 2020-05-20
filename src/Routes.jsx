import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import {
    MinimalLayout,
    MainLayout
} from './layouts'
import {
    RouteWithLayout
} from './components'
import {
    NotFound as NotFoundView,
    Generic as GenericView
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/generic" />
            <RouteWithLayout
                component={GenericView}
                exact
                layout={MainLayout}
                path='/generic'
            />
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