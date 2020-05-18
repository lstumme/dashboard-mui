import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class MainDisplay extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"><h2>Home</h2></Route>
                    <Route path="/about"><h2>About</h2></Route>
                    <Route path="/contact"><h2>Contact</h2></Route>
                </Switch>
            </Router>
        );
    }
}

export default MainDisplay;