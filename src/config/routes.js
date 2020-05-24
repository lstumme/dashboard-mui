import React, { lazy } from 'react';
import {
    Crop75 as Crop75Icon,
    FontDownload as FontDownloadIcon,
} from '@material-ui/icons';
import {
    ButtonsView,
    TypographyView
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
        path: "/typeography",
        view: < TypographyView />,
        icon: <FontDownloadIcon/>
    }
];

export default routes;