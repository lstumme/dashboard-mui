import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import {
    AppToolbar,
    Sidebar,
    MainPanel
} from './components';

import {
    TypographyView,
    ButtonsView,
} from './views';

import {routes} from './config';
import ContainedButtons from './reference/ContainedButtons';
import ClippedBar from './reference/ClippedBar';
import theme from './theme';

const browserHistory = createBrowserHistory();

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary,
        display: 'flex'
    },
    toolbarMargin: theme.mixins.toolbar,
}));

const App = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleToolbarState = (value) => {
        setOpen(!open);
    }
    return (
        //<ClippedBar/>
        <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <div className={classes.root}>
                    <AppToolbar stateChanged={handleToolbarState}/>
                    <Sidebar state={open} routes={routes}/>                        
                    
                    <MainPanel routes={routes}>
                        <ButtonsView />
                        {/* <TypographyView/> */}
                    </MainPanel>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;