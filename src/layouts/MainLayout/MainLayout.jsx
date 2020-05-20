import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import {
    Topbar,
    Sidebar,
    Footer
} from './components';

const MainLayout = props => {
    const { children } = props;
    return (
        <>
            <Topbar/>
            <main>
            </main>
        </>
    );
};

export default MainLayout;