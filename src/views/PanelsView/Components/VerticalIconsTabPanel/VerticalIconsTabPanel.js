import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
    import {
        Settings as SettingsIcon,
        AccountCircle as ProfileIcon,
        Build as OptionsIcon
    } from '@material-ui/icons'

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
        height: 216
    },
}));

export default function VerticalIconTabPanel() {
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
                <Tab label="Profile"  icon={<ProfileIcon/>} {...a11yProps(0)} />
                <Tab label="Settings" icon={<SettingsIcon/>} {...a11yProps(1)} />
                <Tab label="Options" icon={<OptionsIcon/>} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography variant="body1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error natus, repellat officiis adipisci perspiciatis vel tempora. Quae aspernatur facere fugiat alias atque quibusdam illum excepturi. Expedita ut ratione sunt aut.
                </Typography>
                <br></br>
                <Typography variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium culpa repellendus vitae, rerum illo voluptate suscipit voluptatem aspernatur a similique?
                </Typography>
                <br></br>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae voluptate suscipit unde veritatis. Fugit nihil iste dolor asperiores.
                </Typography>
                <br></br>
                <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, atque.
                </Typography>      
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem veniam est deleniti. Ipsa explicabo et tenetur, numquam nihil assumenda corrupti laboriosam eligendi praesentium perspiciatis.
               </Typography>
                    <br></br>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quia praesentium nisi placeat tempore perspiciatis alias dolore laboriosam.
                </Typography>
            </TabPanel>
        </div>
    );
}