import React from 'react';
import {
    Crop75 as Crop75Icon,
    FontDownload as FontDownloadIcon,
    ViewWeek as ViewWeekIcon,
    NotificationImportant as AlertsIcon
} from '@material-ui/icons';
import {
    ButtonsView,
    TypographyView,
    PanelsView, 
    AlertsView
} from '../views';

const routes = [
    {
        name: "Buttons",
        path: "/buttons",
        view: <ButtonsView />,
        icon: < Crop75Icon />
    },
    {
        name: "Typography",
        path: "/typography",
        view: < TypographyView />,
        icon: <FontDownloadIcon />
    },
    {
        name: "Panels",
        path: "/panels",
        view: <PanelsView />,
        icon: <ViewWeekIcon />
    },
    {
        name:"Alerts",
        path: "/alerts",
        view: <AlertsView/>,
        icon: <AlertsIcon/>
    }

];

export default routes;