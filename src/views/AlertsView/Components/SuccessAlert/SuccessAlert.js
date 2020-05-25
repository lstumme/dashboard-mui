import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Button, 
    Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent
} from '@material-ui/core';
import {
    CheckCircleOutline as CheckCircleOutlineIcon
} from '@material-ui/icons';

const SuccessAlert = (props) => {
    const { label, title, children } = props;
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
                    <div style={{textAlign: "center"}}>
                        <CheckCircleOutlineIcon style={{ fontSize: 75, color:"lightGreen" }}/>
                    </div>
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

export default SuccessAlert;