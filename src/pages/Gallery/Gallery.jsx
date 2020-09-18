import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Gallery extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Gallery</h1>
                <Link to="/addimage">
                    Add Image
                </Link><br />
                <Link to="/wiewimage">
                    View Image
                </Link><br />
                <Link to="/editimage">
                    Edit Image
                </Link><br />
            </>
        );
    }
}

export default Gallery;