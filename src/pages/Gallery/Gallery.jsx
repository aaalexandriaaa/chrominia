import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import ImageCard from '../../components/ImageCard/ImageCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
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
              <Button
                className="greenButton"
                id='button'
                href="/addimage"
              >
                Add Image
                </Button>
            </div>
          </>}
        <Container>
          {this.state.images.map((image, idx) =>
            <Col key={image.idx}>
              <Link
                to={{
                  pathname: `/viewimage/${image._id}`
                }}
              >
                <ImageCard
                  className="card"
                  image={image}
                />
              </Link>
            </Col>
          )}
        </Container>
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