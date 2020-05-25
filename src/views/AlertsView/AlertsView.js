import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent,
    Button,
    Typography,
} from '@material-ui/core';

import {
    SimpleAlert,
    TitleAlert,
    SuccessAlert
} from './Components';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
    },
    flex: {
        flex: 1
    },
    cardroot: {
        minHeight: 125,
        margin: theme.spacing(2),
        textAlign: "center"
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));




const AlertsView = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Typography variant="h2" className={classes.root}>Sweet Alerts</Typography>
            <br></br>
            <Typography variant="body1" className={classes.root}>A beautiful plugin, that replace the classic alert.</Typography>
            <br></br>
            <Grid container className={classes.root}>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="Basic Example" />
                        <CardContent>
                            <SimpleAlert label="Try it!">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, porro soluta quia aliquid totam facilis blanditiis hic eos. Voluptas itaque harum quod consectetur possimus quia animi eligendi, fugiat repudiandae asperiores.
                            </SimpleAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="A title with a text under" />
                        <CardContent>
                            <TitleAlert label="Try it!" title="Simple alert dialog with title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, porro soluta quia aliquid totam facilis blanditiis hic eos. Voluptas itaque harum quod consectetur possimus quia animi eligendi, fugiat repudiandae asperiores.
                            </TitleAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="A success message" />
                        <CardContent>
                            <SuccessAlert label="Try it!" title="Simple alert dialog with title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, porro soluta quia aliquid totam facilis blanditiis hic eos. Voluptas itaque harum quod consectetur possimus quia animi eligendi, fugiat repudiandae asperiores.
                            </SuccessAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="Custom HTML description" />
                        <CardContent>
                            <Button variant="contained" color="primary">Try it!</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="A warning message, with a function attached to the 'Confirm' Button..." />
                        <CardContent>
                            <Button variant="contained" color="primary">Try it!</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="...and by passing a parameter, you can execute something else for 'Cancel'" />
                        <CardContent>
                            <Button variant="contained" color="primary">Try it!</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="A message with auto close timer set to 2 seconds" />
                        <CardContent>
                            <Button variant="contained" color="primary">Try it!</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="Modal window with input field" />
                        <CardContent>
                            <Button variant="contained" color="primary">Try it!</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default AlertsView;

