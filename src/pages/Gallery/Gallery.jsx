import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'

class Gallery extends Component {
    state = {
        images: []
    }

    async componentDidMount() {
        const images = await imageAPI.getForUser();
        this.setState({ images })
      }

    render() {
        return (
            <>
                <h1>Gallery</h1>
                <Link 
                    to={{
                       pathname: "/addimage",
                    }}
                >
                    Add Image
                </Link><br />
                {/* <Link to="/wiewimage">
                    View Image
                </Link><br />
                <Link to="/editimage">
                    Edit Image
                </Link><br /> */}
            </>
        );
    }
}

export default Gallery;