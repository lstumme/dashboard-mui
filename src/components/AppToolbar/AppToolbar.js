import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    List as ListIcon,
    MoreVert as MoreVertIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginLeft: -20,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
}));


const AppToolbar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerState = () => {
        let newState = !open;
        props.stateChanged(newState);
        setOpen(newState);
    }
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={handleDrawerState}
                >

                    {open ? <MoreVertIcon /> : <ListIcon />}
                </IconButton>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.flex}
                >
                    Material UI Dashboard
                        </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;