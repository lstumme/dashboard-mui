import React from 'react';
import {
    Alert as MuiAlert
} from '@material-ui/lab';

const Alert = (props) => {
    const alertClosed = () => {

    };
    return <MuiAlert elevation={6} variant="filled" onClose={alertClosed} {...props} />;
};

export default Alert;