import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import {ExpandMore as ExpandMoreIcon} from '@material-ui/icons';
const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

export default function AccordionPanel() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Profile</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
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
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Settings</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam quae voluptate suscipit unde veritatis. Fugit nihil iste dolor asperiores.
                        </Typography>
                        <br></br>
                        <Typography variant="body1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, atque.
                        </Typography>      
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Options</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography variant="body1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem veniam est deleniti. Ipsa explicabo et tenetur, numquam nihil assumenda corrupti laboriosam eligendi praesentium perspiciatis.
                        </Typography>
                            <br></br>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quia praesentium nisi placeat tempore perspiciatis alias dolore laboriosam.
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}