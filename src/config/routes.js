import React, { lazy } from 'react';
import {
    Crop75 as Crop75Icon,
    FontDownload as FontDownloadIcon,
    ViewWeek as ViewWeekIcon
} from '@material-ui/icons';
import {
    ButtonsView,
    TypographyView,
    PanelsView
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

];

export default routes;