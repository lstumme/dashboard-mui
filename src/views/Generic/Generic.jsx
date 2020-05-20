import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoint.up('sm')]: {
            paddingTop: 64
        },
        backgroundColor: 'red',
        border: 2
    },
    content: {
        paddingTop: 150,
        textAlign: 'center'
    },
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 560
    }
}));
// The objective is to test components disponsal
const Generic = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>This is Generic view</h3>
        </div>
    );
};

export default Generic;