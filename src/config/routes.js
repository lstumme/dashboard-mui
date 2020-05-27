import React from 'react';
import {
    Crop75 as Crop75Icon,
    FontDownload as FontDownloadIcon,
    ViewWeek as ViewWeekIcon,
    NotificationImportant as AlertsIcon,
    ErrorOutline as NotificationsIcon,
    VerticalSplitOutlined as RegularFormsIcon,
    ContactMail as ExtendedFormsIcon,
} from '@material-ui/icons';
import {
    ButtonsView,
    TypographyView,
    PanelsView,
    AlertsView,
    NotificationView,
    RegularFormsView,
    ExtendedFormsView
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
        name: "Alerts",
        path: "/alerts",
        view: <AlertsView />,
        icon: <AlertsIcon />
    },
    {
        name: "Notifications",
        path: "/notifications",
        view: <NotificationView />,
        icon: <NotificationsIcon />
    },
    {
        name: "Regular Forms",
        path: "/regularforms",
        view: <RegularFormsView />,
        icon: <RegularFormsIcon />
    },
    {
        name: "Extended Forms",
        path: "/extendedforms",
        view: <ExtendedFormsView />,
        icon: <ExtendedFormsIcon />
    }
];

export default routes;