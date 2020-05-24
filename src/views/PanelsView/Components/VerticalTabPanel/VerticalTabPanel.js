import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 240,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 130,
        height: 145
    },
}));

export default function VerticalTabPanel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Settings" {...a11yProps(1)} />
                <Tab label="Options" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography variant="body1">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                </Typography>
                <br></br>
                <Typography variant="body1">
                    Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                </Typography>
                <br></br>
                <Typography variant="body1">
                    This is very nice.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="body1">
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                </Typography>
                <br></br>
                <Typography variant="body1">
                    Dramatically maintain clicks-and-mortar solutions without functional solutions.
                </Typography>      
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="body1">
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                </Typography>
                    <br></br>
                <Typography variant="body1">
                    Dynamically innovate resource-leveling customer service for state of the art customer service.      
                </Typography>
            </TabPanel>
        </div>
    );
}