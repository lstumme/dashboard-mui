import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
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
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
});


const AppToolbar = withStyles(styles)(
    class extends Component {
        render() {
            const { classes } = this.props;
            return (
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            My Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            );
        }
    }
);

export default AppToolbar;