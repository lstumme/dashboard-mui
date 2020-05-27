import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent, Avatar,
    TextField, Checkbox, Button,
    FormControlLabel, Box, Typography
} from '@material-ui/core';
import {
    AccessibilityNewSharp as AccessibilityNewSharpIcon, 
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
        paddingTop: theme.spacing(3)
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
                                <TextField label="Email adress" fullWidth="true"/>
                            </Box>
                            <Box component="span" display="block">
                                <TextField label="Password" type="password" fullWidth="true"/>
                            </Box>
                            <Box component="span" display="block">
                                <FormControlLabel control={<Checkbox color="primary"/>} label="Subscribe to newsletter"/>
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
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Typography color="textSecondary">Email adress</Typography>
                                </Grid>
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <TextField fullWidth="true"/>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Typography color="textSecondary">Password</Typography>
                                </Grid>
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <TextField type="password" fullWidth="true"/>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItem}/>
                                <Grid item md={9} sm={12} xs={12} className={classes.horizontalItem}>
                                    <Box component="span" display="block">
                                        <FormControlLabel control={<Checkbox color="primary"/>} label="Subscribe to newsletter"/>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12} className={classes.horizontalItem}/>
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
        </Grid>
    );
};

export default RegularFormView;