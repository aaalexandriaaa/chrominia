import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import authService from '../../services/authService'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
        <div className='yellowButton-div'>
          <Button href={`/gallery/${image.user}`} className='yellowButton' id='button'>
            Back to Gallery
                </Button>
        </div>


        {user && (user._id === image.user) &&
          <div className='card-container'>
            <Card style={{ width: '28rem' }} className='imgCard'>
              <Card.Img variant="top" src={image.url} width="300" alt={image.description}></Card.Img>
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text><p>{image.description}</p></Card.Text>
                <div className='button-divs'>
                  <Button type="submit" onClick={() => this.handleDeleteImage(image._id)} className='redButton' id='button'>
                    Delete Image
                            </Button>

                  <Link
                    className='purpleButton'
                    id='button'
                    to={{
                      pathname: '/editimage',
                      state: { image }
                    }}
                  >
                    Edit Image
                            </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        }
      </>
    );
  }
}

export default ViewImage;
