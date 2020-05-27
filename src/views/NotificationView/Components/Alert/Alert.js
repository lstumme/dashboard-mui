import React from 'react';
import {
    Alert as MuiAlert
} from '@material-ui/lab';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default Alert;