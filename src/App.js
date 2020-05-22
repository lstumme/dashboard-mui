import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import {
    AppToolbar,
    Sidebar,
    MainPanel
} from './components';

import {
    TypographyView
} from './views';

const browserHistory = createBrowserHistory();

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary,
    },
    toolbarMargin: theme.mixins.toolbar,
});

const App = withStyles(styles)(
    class extends Component {
        render() {
            const { classes } = this.props;
            return (
                <ThemeProvider>
                    <Router history={browserHistory}>
                        <AppToolbar />
                        <div className={classes.toolbarMargin} />
                        <div className={classes.root}>
                            <Sidebar />
                            <MainPanel>
                                <TypographyView />
                            </MainPanel>
                        </div>
                    </Router>
                </ThemeProvider>
            );
        }
    });

export default App;