import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent,
    Typography,
} from '@material-ui/core';

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
        textAlign: "left"
    },
    cardroot2: {
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


const NotificationView = (props) => {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid item sm={12} className={classes.root}>
                <Typography variant="h2">Notifications</Typography>
                <br></br>
                <Typography variant="body1">Notifications samples</Typography>
                <br></br>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title="Notifications Style" />
                    <CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title="Notifications States" />
                    <CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={12}>
                <Card className={classes.cardroot2}>
                    <CardHeader title="Notifications Places" />
                    <CardContent>
                    <Typography variant="body1">Click to view notifications</Typography>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );

}

export default NotificationView;
