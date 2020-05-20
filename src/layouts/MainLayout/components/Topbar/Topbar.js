import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Button
} from '@material-ui/core';

import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Topbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" classes={classes.menuButton} color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit" >
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Topbar;