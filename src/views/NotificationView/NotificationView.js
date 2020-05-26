import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withSnackbar } from 'notistack';
import {
    Grid,
    Card, CardHeader, CardContent,
    Typography, Button
} from '@material-ui/core';

import {
    Alert
} from './Components';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
    },
    flex: {
        flex: 1
    },
    cardroot: {
        minHeight: 330,
        margin: theme.spacing(1),
        textAlign: "left",
    },
    cardcontent: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    rootbutton: {
        '& > * ': {
            margin: theme.spacing(1),
        },
    },
    cardroot2: {
        minHeight: 125,
        margin: theme.spacing(2),
        textAlign: "center"
    },
    widthbutton: {
        minWidth: "28%",
        maxWidth: "28%"
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


const NotificationView = (props) => {
    const classes = useStyles();
    const snackMessage = "You notification here..."
    const handleTLClick = () => {
        props.enqueueSnackbar(snackMessage, {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "left"
            }
        });
    }
    const handleTCClick = () => {
        props.enqueueSnackbar(snackMessage, {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "center"
            }
        });
    }
    const handleTRClick = () => {
        props.enqueueSnackbar(snackMessage, {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            }
        });
    }
    const handleBLClick = () => {
        props.enqueueSnackbar(snackMessage, {
            variant: "info",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
            }
        });
    }
    const handleBCClick = () => {
        props.enqueueSnackbar(snackMessage, {
            variant: "error",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }
        });
    }
    const handleBRClick = () => {
        props.enqueueSnackbar(snackMessage, {
            variant: "warning",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        });
    }

    return (
        <Grid container >
            <Grid item sm={12} className={classes.root}>
                <Typography variant="h2">Notifications</Typography>
                <br></br>
                <Typography variant="body1">Notifications samples</Typography>
                <br></br>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title="Notifications States" />
                    <CardContent className={classes.cardcontent}>
                        <Alert severity="error">This is an error message!</Alert>
                        <Alert severity="warning">This is a warning message!</Alert>
                        <Alert severity="info">This is an information message!</Alert>
                        <Alert severity="success">This is a success message!</Alert>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title="Notifications Places" />
                    <CardContent className={classes.cardcontent}>
                        <Typography variant="body1">Click to view notifications</Typography>
                        <div className={classes.rootbutton}>
                            <Button variant="outlined" color="primary" className={classes.widthbutton} onClick={handleTLClick}>
                                Top Left
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.widthbutton} onClick={handleTCClick}>
                                Top Center
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.widthbutton} onClick={handleTRClick}>
                                Top Right
                            </Button>
                        </div>
                        <div className={classes.rootbutton}>
                            <Button variant="outlined" color="primary" className={classes.widthbutton} onClick={handleBLClick}>
                                Bottom Left
                                </Button>
                            <Button variant="outlined" color="primary" className={classes.widthbutton} onClick={handleBCClick}>
                                Bottom Center
                                </Button>
                            <Button variant="outlined" color="primary" className={classes.widthbutton} onClick={handleBRClick}>
                                Bottom Right
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );

}

export default withSnackbar(NotificationView);
