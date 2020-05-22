import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '260px',
        backgroundColor: 'green',
        height: "100vh"
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)'
        }
    },
    toolbarMargin: theme.mixins.toolbar
});

const Sidebar = withStyles(styles)(
    class extends Component {
        render() {
            const { classes } = this.props;
            return (
                <Grid container justify="space-between">
                    <Grid item>
                        <Drawer variant='permanent' classes={{ paper: classes.drawer }}>
                            <List>
                                <ListSubheader>Dashboard</ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText>Ajouter</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText>Ajouter</ListItemText>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Grid>
                </Grid>
            );
        }
    }
);

export default Sidebar;