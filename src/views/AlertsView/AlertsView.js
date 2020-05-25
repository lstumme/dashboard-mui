import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent,
    Button,
    Dialog, DialogActions, DialogContentText, DialogContent,
    Typography,
} from '@material-ui/core';
import {
    CheckCircleOutline as CheckCircleOutlineIcon,
    Cancel as CancelOutlineIcon
} from '@material-ui/icons';

import {
    SimpleAlert,
    TitleAlert,
    SuccessAlert,
    ConfirmationAlert,
    AutoCloseAlert,
    FormDialog
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

    const [opendeletesuccess, setOpenDeleteSuccess] = React.useState(false);
    const [opendeleteaborted, setOpenDeleteAborted] = React.useState(false);

    const handleCloseDeleteSuccess = () => {
        setOpenDeleteSuccess(false);
    }
    const showSuccess = () => {
        setOpenDeleteSuccess(true);
    }

    const handleCloseDeleteAborted = () => {
        setOpenDeleteAborted(false);
    }
    const showAbort = () => {
        setOpenDeleteAborted(true);
    }



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
                            <TitleAlert label="Try it!" title="Customize Alert content with HTML tags">
                                <b>Lorem ipsum dolor</b> <u>sit amet consectetur adipisicing elit</u>. Eligendi, porro soluta quia aliquid totam facilis blanditiis hic eos. Voluptas itaque harum quod consectetur possimus quia animi eligendi, <em>fugiat repudiandae asperiores.</em>
                            </TitleAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="A warning message, with a function attached to the 'Confirm' Button..." />
                        <CardContent>
                            <ConfirmationAlert onAccept={showSuccess} label="Try it!">
                                Are you sure you want to delete this file ?
                            </ConfirmationAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="...and by passing a parameter, you can execute something else for 'Cancel'" />
                        <CardContent>
                            <ConfirmationAlert onAccept={showSuccess} onDenied={showAbort} label="Try it!">
                                Are you sure you want to delete this file ?
                            </ConfirmationAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="A message with auto close timer set to 3 seconds" />
                        <CardContent>
                            <AutoCloseAlert label="Try it!" timeout="3000"> 
                                This alert wil be closed in 3s... Please wait.
                            </AutoCloseAlert>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title="Modal window with input field" />
                        <CardContent>
                            <FormDialog label="Try it!" title="Subscribe">
                                Please enter your mail to stay in touch !
                            </FormDialog>
                        </CardContent>
                    </Card>
                </Grid>
                <Dialog
                    open={opendeletesuccess}
                    onClose={handleCloseDeleteSuccess}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <div style={{ textAlign: "center" }}>
                            <CheckCircleOutlineIcon style={{ fontSize: 75, color: "lightGreen" }} />
                        </div>
                        <DialogContentText id="alert-dialog-description">
                            The file has been successfuly deleted !
                                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDeleteSuccess} color="primary" autoFocus>
                            Close
                                    </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={opendeleteaborted}
                    onClose={handleCloseDeleteAborted}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <div style={{ textAlign: "center" }}>
                            <CancelOutlineIcon style={{ fontSize: 75, color: "Red" }} />
                        </div>
                        <DialogContentText id="alert-dialog-description">
                            The file has been is safe !
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDeleteAborted} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </Grid>
        </Fragment>
    );
}

export default AlertsView;

