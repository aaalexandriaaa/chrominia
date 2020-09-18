import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewImage extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>ViewImage</h1>
                <Link to="/gallery">
                    Gallery
                </Link><br />
                <Link to="/editimage">
                    Edit Image
                </Link><br />
            </>
        );
    }
}

export default ViewImage;