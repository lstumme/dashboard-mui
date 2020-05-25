import React, {Fragment} from 'react';
import {
    Button, 
    Dialog, DialogActions, DialogContentText, DialogContent
} from '@material-ui/core';
import {
    WarningOutlined as WarningOutlineIcon
} from '@material-ui/icons';

const ConfirmationAlert = (props) => {
    const { label, children, onAccept } = props;
    const [open, setOpen] = React.useState(false);

    const handleConfirm = event => {
        setOpen(false);
        onAccept(event);
    }

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
                        <WarningOutlineIcon style={{ fontSize: 75, color:"orange" }}/>
                    </div>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )    
};

export default ConfirmationAlert;