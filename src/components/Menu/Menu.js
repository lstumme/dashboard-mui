import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import MainDisplay from '../MainDisplay/MainDisplay';

class Menu extends Component {
    render() {
        return (
            <>
                <h1>Hello World</h1>
                <Router>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </Router>
                <MainDisplay/>
            </>
        );
    }
}

export default Menu;