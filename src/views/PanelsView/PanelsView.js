import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent,
} from '@material-ui/core';

import {
    HorizontalTabPanel,
    VerticalTabPanel,
    AccordionPanel,
    VerticalIconsTabPanel,
    HorizontalIconsTabPanel
} from './Components';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    cardroot: {
        minHeight: 380,
        margin: theme.spacing(2)
    },
    cardroot2: {
        minHeight: 440,
        margin: theme.spacing(2)
    },
    cardroot3: {
        minHeight: 470,
        margin: theme.spacing(2)
    }
}));
const PanelsView = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title="Navigation Pills" subheader="Horizontal Tabs" />
                    <CardContent>
                        <HorizontalTabPanel />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title="Navigation Pills" subheader="Vertical Tabs" />
                    <CardContent>
                        <VerticalTabPanel />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot2}>
                    <CardHeader title="Navigation Pills Icons" subheader="Horizontal Tabs"/>
                    <CardContent>
                        <HorizontalIconsTabPanel />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot2}>
                    <CardHeader title="Navigation Pills Icons" subheader="Vertical Tabs"/>
                    <CardContent>
                        <VerticalIconsTabPanel />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} sm={12}>
                <Card className={classes.cardroot3}>
                    <CardHeader title="Collapsible Accordion"/>
                    <CardContent>
                        <AccordionPanel />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default PanelsView;

