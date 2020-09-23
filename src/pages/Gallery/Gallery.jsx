import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import ImageCard from '../../components/ImageCard/ImageCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        <Container>
          {this.state.images.map((image, idx) =>
            <Row md={{ span: 4, offset: 4 }}>
              <Col>
                <Link
                  key={idx}
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
            </Row>
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