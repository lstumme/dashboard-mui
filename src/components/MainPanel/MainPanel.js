import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: 'calc(100%-260px)',
        marginLeft: '260px',
        height: '90vh'
    },
});

const MainPanel = withStyles(styles)(
    class extends Component {
        render() {
            const { classes, children } = this.props;
            return (
                <main>
                    <div className={classes.root}>
                        {this.props.children}
                    </div>
                </main>
            );
        }
    });

export default MainPanel;