import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Sidebar = (props) => {
    const classes = useStyles();

    const { state, routes } = props;

    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setOpen(state);
    }, [state]);

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
            <Toolbar />
            <div>
                <List>
                    {routes.map((route, index) => (
                        <Link to={route.path} style={{ textDecoration: 'none' }} key={route.name}>
                            <ListItem button key={route.name}>
                                <ListItemIcon>{route.icon}</ListItemIcon> 
                                <ListItemText primary={route.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;