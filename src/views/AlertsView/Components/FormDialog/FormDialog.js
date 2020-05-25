import React, { Fragment } from 'react';
import {
    Button,
    Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent,
    TextField
} from '@material-ui/core';

const FormDialog = (props) => {
    const { label, title, children, onConfirmed } = props;
    const [open, setOpen] = React.useState(false);

    const handleCloseSuccess = (event) => {
        setOpen(false);
        if(onConfirmed) {
            onConfirmed(event);
        }   
    }

    const handleClose = () =>{
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
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuccess} color="primary" autoFocus>
                        OK
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default FormDialog;