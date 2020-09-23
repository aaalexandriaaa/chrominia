import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import authService from '../../services/authService'
import './ViewImage.css'

class ViewImage extends Component {
  state = {
    image: {},
  }

  async componentDidMount() {
    const image = await imageAPI.getImage(this.props.match.params.id)
    this.setState({ image })
  }

  handleDeleteImage = async id => {
    if (authService.getUser()) {
      await imageAPI.deleteOne(id)
        .then(() => this.props.history.push('/gallery'));
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    const image = this.state.image
    const user = this.props.user
    return (
      <>
        <h1>{image.title}</h1>
        <Link to={`/gallery/${image.user}`}>
          Back to Gallery
                </Link><br />

        {user && (user._id === image.user) &&
          <>
            <div className='edit-delete-container'>
              <p>Description: {image.description}</p>
              <button type="submit" onClick={() => this.handleDeleteImage(image._id)} className='deleteImgButton'>
                Delete Image
                            </button>
              <Link
                className='editImgButton'
                to={{
                  pathname: '/editimage',
                  state: { image }
                }}
              >
                Edit Image
                            </Link>
            </div>
            <div className='container-img'>
              <img src={image.url} width="600" alt={image.description}></img>
            </div>
          </>
        }
      </>
    );
  }
}

export default ViewImage;
