import React, { Component } from 'react';
import * as imageAPI from '../../services/images-api'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './AddImage.css'

class AddImage extends Component {
  state = {
    image: {},
    invalidForm: true,
    formData: {
      title: '',
      description: '',
      url: '',
    }
  }

  formRef = React.createRef()

  handleAddImage = async newImageData => {
    await imageAPI.create(newImageData)
      .then(() => this.props.history.push('/gallery'))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleAddImage(this.state.formData)
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
        <div className='yellowButton-div'>
          <Button href={`/gallery/${image.user}`} className='yellowButton' id='button'>
            Back to Gallery
                </Button>
        </div>
        <div className='form-div'>
          <Form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div>
              <Form.Label style={{ padding: '5px' }}>Image Title</Form.Label>
              <Form.Control name="title" type="text" value={this.state.formData.title} onChange={this.handleChange} required />
            </div>
            <div>
              <Form.Label style={{ padding: '5px' }}>Image Description</Form.Label>
              <Form.Control name="description" type="text" value={this.state.formData.description} onChange={this.handleChange} required />
            </div>
            <div>
              <Form.Label style={{ padding: '5px' }}>Image Url</Form.Label>
              <Form.Control name="url" type="text" value={this.state.formData.url} onChange={this.handleChange} required />
            </div>
            <div className='button-div'>
              <Button
                className='greenButton'
                id='button'
                type="submit"
                disabled={this.state.invalidForm}
              >
                Add Image
                    </Button>
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default AddImage;