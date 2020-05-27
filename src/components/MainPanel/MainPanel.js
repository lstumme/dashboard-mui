import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar, Typography} from '@material-ui/core';
import {Switch, Route} from 'react-router-dom';
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    footer: {
        textAlign: "center",
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        borderStyle: "solid none none none",
        border: 1,
        borderColor: "lightgray"
    }
});

const MainPanel = withStyles(styles)(
    class extends Component {
        render() {
            const { classes, routes } = this.props;
            return (
                <main className={classes.content}>
                    <Toolbar/>
                    <div className={classes.root}>
                        <Switch>
                            {routes.map((route,index) => (
                                <Route exact path={route.path} key={route.name}>{route.view}</Route>
                            ))}
                        </Switch>
                    </div>
                    <footer className={classes.footer}>
                    <hl></hl>
                    <span>
                        <Typography variant="subtitle2">
                            &copy; {1900 + new Date().getYear()}{" "}
                            Ludovic Stumme, made for whatever you need !
                        </Typography>
                    </span>
                    </footer>

                </main>
            );
        }
    });

export default MainPanel;