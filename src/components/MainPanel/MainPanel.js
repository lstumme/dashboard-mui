import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar} from '@material-ui/core';

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
            const { classes, children } = this.props;
            return (
                <main className={classes.content}>
                    <Toolbar/>
                    <div className={classes.root}>
                        {this.props.children}
                    </div>
                </main>
            );
        }
    });

export default MainPanel;