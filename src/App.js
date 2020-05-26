import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { 
    InfoOutlined as InfoIcon,
    ReportProblemOutlined as WarningIcon,
    ErrorOutline as ErrorIcon,
    CheckCircleOutlineOutlined as SuccessIcon
} from '@material-ui/icons';
import {
    AppToolbar,
    Sidebar,
    MainPanel
} from './components';

import { routes } from './config';
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
            <SnackbarProvider maxSnack="3"
            iconVariant={{
                success: <SuccessIcon/>,
                error: <ErrorIcon/>,
                warning: <WarningIcon/>,
                info: <InfoIcon/>,
            }}>
                <Router history={browserHistory}>
                    <div className={classes.root}>
                        <AppToolbar stateChanged={handleToolbarState} />
                        <Sidebar state={open} routes={routes} />
                        <MainPanel routes={routes}></MainPanel>
                    </div>
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;