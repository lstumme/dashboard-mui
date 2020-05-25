import React, { Fragment } from 'react';
import {
    Button,
    Dialog, DialogActions, DialogContentText, DialogContent
} from '@material-ui/core';

const SimpleAlert = (props) => {
    const { label, children } = props;
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <Fragment>
            <Button variant="contained" color="Primary" onClick={handleOpen}>
                {label}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default SimpleAlert;