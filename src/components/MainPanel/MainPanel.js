import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar} from '@material-ui/core';
import {Switch, Route} from 'react-router-dom';
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
});

const MainPanel = withStyles(styles)(
    class extends Component {
        render() {
            const { classes, routes } = this.props;
            return (
                <main className={classes.content}>
                    <Toolbar/>
                    <div className={classes.root}>
                        <Switch>
                            {routes.map((route,index) => (
                                <Route exact path={route.path} key={route.name}>{route.view}</Route>
                            ))}
                        </Switch>
                    </div>
                </main>
            );
        }
    });

export default MainPanel;