import React, { Component } from 'react';
import * as imageAPI from '../../services/images-api'
import './EditImage.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class EditImage extends Component {
  state = {
    image: {},
    invalidForm: false,
    formData: this.props.location.state.image
  }

  formRef = React.createRef()

  handleUpdateImage = async updatedImageData => {
    await imageAPI.update(updatedImageData)
      .then(() => this.props.history.push(`viewimage/${updatedImageData._id}`))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleUpdateImage(this.state.formData)
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  }

  render() {
    const image = this.state.image
    return (
      <>
        <h1>Add an Image</h1>
        <div className='button-div'>
          <Button href={`/gallery/${image.user}`} className='yellowButton' id='button'>
            Back to Gallery
                </Button>
        </div>

        <div className='form-div'>
          <Form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div>
              <Form.Label style={{ padding: '10px' }}>Image Title</Form.Label>
              <Form.Control
                size='lg'
                name="title"
                type="text"
                value={this.state.formData.title}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <Form.Label style={{ padding: '10px' }}>Image Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <Form.Label style={{ padding: '10px' }}>Image Url</Form.Label>
              <Form.Control
                name="url"
                type="text"
                value={this.state.formData.url}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='button-div'>
              <Button
                className='purpleButton'
                id='button'
                type="submit"
                disabled={this.state.invalidForm}
              >
                Update Image
                    </Button>
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default EditImage;