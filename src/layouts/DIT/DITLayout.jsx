import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import classes from '../../assets/css/navalgroup.css';
import Routes from './routes';
import Sidebar from '../../components/Sidebar/Sidebar';
class DITLayout extends Component {
    renderRoutes = (routes) => {
        return routes.map(element => {
            let hasChild = element.elements;
            if (hasChild) {
                return this.renderRoutes(element.elements);
            } else {
                return (<Route exact path={element.path}>{element.component}</Route>);
            }
        });
    };


    renderLinks = (routes) => {
        return routes.map(element => {
            let hasChild = element.elements;
            if (hasChild) {
                return (
                    <li>{element.name}
                        <ul>{this.renderLinks(element.elements)}</ul>
                    </li>
                );
            } else {
                return (
                    <li><Link to={element.path}>{element.name}</Link></li>
                );
            }
        });
    };
    render() {
        return (
            <div>
                <Router>
                    <Sidebar>
                        <ul>{this.renderLinks(Routes)}</ul>
                    </Sidebar>
                    <div className="mainpanel">
                        <Switch>
                            {this.renderRoutes(Routes)}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default DITLayout;