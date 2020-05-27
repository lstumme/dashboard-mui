import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent, Avatar,
    TextField, Checkbox, Button,
    FormControlLabel, Box, Typography,
    Radio, RadioGroup, FormGroup
} from '@material-ui/core';
import {
    AccessibilityNewSharp as AccessibilityNewSharpIcon,
    ListAlt as ListAltIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    cardroot: {
        minHeight: 380,
        margin: theme.spacing(2)
    },
    formroot: {
        '& > *': {
            marginBottom: theme.spacing(3),
        }
    },
    horizontalItem: {
        paddingTop: theme.spacing(2),
    },
    horizontalItemLabel: {
        paddingTop: theme.spacing(3),
        textAlign: "right",
        paddingRight: theme.spacing(3)
    }
}));

const RegularFormView = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title={
                        <Typography variant="h4">Stacked Form</Typography>
                    }
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <AccessibilityNewSharpIcon />
                            </Avatar>
                        } />
                    <CardContent>
                        <form className={classes.formroot} noValidate autoComplete="off">
                            <Box component="span" display="block">
                                <TextField label="Email adress" fullWidth="true" />
                            </Box>
                            <Box component="span" display="block">
                                <TextField label="Password" type="password" fullWidth="true" />
                            </Box>
                            <Box component="span" display="block">
                                <FormControlLabel control={<Checkbox color="primary" />} label="Subscribe to newsletter" />
                            </Box>
                            <Box component="span" display="block">
                                <Button variant="contained" color="primary">Submit</Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title={
                        <Typography variant="h4">Horizontal Form</Typography>
                    }
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <AccessibilityNewSharpIcon />
                            </Avatar>
                        } />
                    <CardContent>
                        <form noValidate autoComplete="off">
                            <Grid container>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                    <Typography color="textSecondary">Email adress</Typography>
                                </Grid>
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <TextField fullWidth="true" />
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                    <Typography color="textSecondary">Password</Typography>
                                </Grid>
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <TextField type="password" fullWidth="true" />
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItem} />
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <FormControlLabel control={<Checkbox color="primary" />} label="Subscribe to newsletter" />
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItem} />
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <Button variant="contained" color="primary">Submit</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item sm={12}>
                    <Card className={classes.cardroot}>
                        <CardHeader title={
                            <Typography variant="h4">Form Elements</Typography>
                        }
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <ListAltIcon />
                                </Avatar>
                            } />
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <Grid container>
                                    <Grid item md={2} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                        <Typography color="textSecondary">With Help</Typography>
                                    </Grid>
                                    <Grid item md={10} sm={12} xs={12} className={classes.horizontalItem}>
                                        <Box component="span" display="block">
                                            <TextField fullWidth="true" />
                                        </Box>
                                    </Grid>

                                    <Grid item md={2} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                        <Typography color="textSecondary">Password</Typography>
                                    </Grid>
                                    <Grid item md={10} sm={12} xs={12} className={classes.horizontalItem}>
                                        <Box component="span" display="block">
                                            <TextField fullWidth="true" type="password" />
                                        </Box>
                                    </Grid>

                                    <Grid item md={2} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                        <Typography color="textSecondary">Placeholder</Typography>
                                    </Grid>
                                    <Grid item md={10} sm={12} xs={12} className={classes.horizontalItem}>
                                        <Box component="span" display="block">
                                            <TextField fullWidth="true" placeholder="placeholder" />
                                        </Box>
                                    </Grid>

                                    <Grid item md={2} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                        <Typography color="textSecondary">Disabled</Typography>
                                    </Grid>
                                    <Grid item md={10} sm={12} xs={12} className={classes.horizontalItem}>
                                        <Box component="span" display="block">
                                            <TextField fullWidth="true" disabled placeholder="disabled" />
                                        </Box>
                                    </Grid>

                                    <Grid item md={2} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                        <Typography color="textSecondary">Checkboxes and radios</Typography>
                                    </Grid>
                                    <Grid item md={10} sm={12} xs={12} className={classes.horizontalItem}>
                                        <Box component="span" display="block">
                                            <FormControlLabel control={<Checkbox color="primary" />} label="First Checkbox" />
                                        </Box>
                                        <Box component="span" display="block">
                                            <FormControlLabel control={<Checkbox color="primary" />} label="Second Checkbox" />
                                        </Box>
                                        <RadioGroup aria-label="gender" name="gender1">
                                            <FormControlLabel value="FirstValue" control={<Radio color="primary"/>} label="First Radio" />
                                            <FormControlLabel value="SecondValue" control={<Radio color="primary" />} label="Second Radio" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item md={2} sm={12} xs={12} className={classes.horizontalItemLabel}>
                                        <Typography color="textSecondary">Inline Checkboxes</Typography>
                                    </Grid>
                                    <Grid item md={10} sm={12} xs={12} className={classes.horizontalItem}>
                                        <FormGroup row>
                                            <FormControlLabel control={<Checkbox color="primary" />} label="a" />
                                            <FormControlLabel control={<Checkbox color="primary" />} label="b" />
                                            <FormControlLabel control={<Checkbox color="primary" />} label="c" />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default RegularFormView;