import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Typography as MuiTypography,
    Button,
    IconButton,
} from '@material-ui/core';

import {
    PhotoCamera,
    Delete as DeleteIcon,
    ArrowDownward as ArrowDownwardIcon,
    CloudUpload as CloudUploadIcon,
    KeyboardVoice as KeyboardVoiceIcon,
    Save as SaveIcon,
    Send as SendIcon,
    Alarm as AlarmIcon,
    AddShoppingCart as AddShoppingCartIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    rootbutton: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    input: {
        display: 'none',
    },
}));


const ButtonsView = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Fragment>
                <Grid item md={6} xs={12}>
                    <h2>Contained Buttons</h2>
                    <div className={classes.rootbutton}>
                        <Button variant="contained">Default</Button>
                        <Button variant="contained" color="primary">Primary</Button>
                        <Button variant="contained" color="secondary">Secondary</Button>
                        <Button variant="contained" disabled>Disabled</Button>
                        <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <h2>Text Buttons</h2>
                    <div className={classes.rootbutton}>
                        <Button >Default</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button disabled>Disabled</Button>
                        <Button color="primary" href="#contained-buttons">Link</Button>
                    </div>
                </Grid>
            </Fragment>
            <Fragment>
                <Grid item md={6} xs={12}>
                    <h2>Outlined Buttons</h2>
                    <div className={classes.rootbutton}>
                        <Button variant="outlined">Default</Button>
                        <Button variant="outlined" color="primary">Primary</Button>
                        <Button variant="outlined" color="secondary">Secondary</Button>
                        <Button variant="outlined" disabled>Disabled</Button>
                        <Button variant="outlined" color="primary" href="#contained-buttons">Link</Button>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <h2>Upload buttons</h2>
                    <div className={classes.rootbutton}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                                </Button>
                        </label>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>                        </div>
                </Grid>
            </Fragment>
            <Fragment>
                <Grid item md={6} xs={12}>
                    <h2>Buttons Sizes</h2>
                    <div className={classes.rootbutton}>
                        <Button size="small" >Small</Button>
                        <Button size="medium" >Medium</Button>
                        <Button size="large" >Large</Button>
                    </div>
                    <div className={classes.rootbutton}>
                        <Button size="small" variant="contained" color="primary">Small</Button>
                        <Button size="medium" variant="contained" color="primary">Medium</Button>
                        <Button size="large" variant="contained" color="primary">Large</Button>
                    </div>
                    <div className={classes.rootbutton}>
                        <Button size="small" variant="outlined" color="primary">Small</Button>
                        <Button size="medium" variant="outlined" color="primary">Medium</Button>
                        <Button size="large" variant="outlined" color="primary">Large</Button>
                    </div>
                    <div className={classes.rootbutton}>
                        <IconButton aria-label="delete" size="small">
                            <ArrowDownwardIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <h2>Buttons with icons and label</h2>
                    <div className={classes.rootbutton}>
                        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
                        <Button variant="contained" color="primary" endIcon={<SendIcon />}>Send</Button>
                        <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>Upload</Button>
                        <Button variant="contained" disabled color="secondary" startIcon={<KeyboardVoiceIcon />}>Talk</Button>
                        <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />}>Save</Button>
                        <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>Save</Button>
                    </div>
                </Grid>
            </Fragment>
            <Fragment>
                <Grid item md={6} xs={12}>
                    <h2>Icon Buttons</h2>
                    <div className={classes.rootbutton}>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>                        </div>
                </Grid>
                <Grid item md={6} xs={12}>
                </Grid>
            </Fragment>
        </Grid>

    );
};

export default ButtonsView;
