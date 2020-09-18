import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddImage extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>AddImage</h1>
                <Link to="/gallery">
                    Gallery
                </Link><br />
            </>
        );
    }
}

export default AddImage;