import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import ImageCard from '../../components/ImageCard/ImageCard'
import './Gallery.css'

class Gallery extends Component {
  state = {
    images: []
  }

  async componentDidMount() {
    const images = await imageAPI.getForUser(this.props.match.params.id);
    this.setState({ images })
  }

  render() {
    const user = this.props.user
    return (
      <>
        <h1>Gallery</h1>
        {user && (user._id === this.props.match.params.id) &&
          <>
            <div className="addImage-div">
              <Link
                className="addImageButton"
                to={{
                  pathname: "/addimage",
                }}
              >
                Add Image
                </Link><br />
            </div>
          </>}
        <div className="imageCard">
          {this.state.images.map((image, idx) =>
            <Link
              key={idx}
              to={{
                pathname: `/viewimage/${image._id}`
              }}
            >
              <ImageCard
                image={image}
              />
            </Link>
          )}
        </div>
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