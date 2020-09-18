import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Landing</h1>
                <Link to="/profile">
                    Profile Page
                </Link><br />
                <Link to="/projects">
                    Projects
                </Link><br />
                <Link to="/viewwishlist">
                    Wish List
                </Link><br />
                <Link to="/allsupplies">
                    Supplies
                </Link><br />
                <Link to="/gallery">
                    Gallery
                </Link><br />
            </>
        );
    }
}



export default LandingPage;