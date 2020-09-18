import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditImage extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>EditImage</h1>
                <Link to="/gallery">
                    Gallery
                </Link><br />
            </>
        );
    }
}

export default EditImage;