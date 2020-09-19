import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'

class Gallery extends Component {
    state = {
        images: []
    }

    handleAddImage = async newImageData => {
        const newImage = await imageAPI.create(newImageData);
        // newImage.user = this.state.user._id 
        this.setState(state => ({
          images: [...state.images, newImage]
        }), () => this.props.history.push('/gallery'));
      }

    render() {
        return (
            <>
                <h1>Gallery</h1>
                <Link 
                    to={{
                       pathname: "/addimage",
                        // handleAddImage: this.handleAddImage
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