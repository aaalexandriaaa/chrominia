import React, { Component } from 'react';
import * as imageAPI from '../../services/images-api'
import Button from 'react-bootstrap/Button'
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
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div>
            <label >Image Title</label><br></br>
            <input name="title" type="text" value={this.state.formData.title} onChange={this.handleChange} required />
          </div><br></br>
          <div>
            <label >Image Description</label><br></br>
            <input name="description" type="text" value={this.state.formData.description} onChange={this.handleChange} required />
          </div><br></br>
          <div>
            <label >Image Url</label><br></br>
            <input name="url" type="text" value={this.state.formData.url} onChange={this.handleChange} required />
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
        </form>
      </>
    );
  }
}

export default AddImage;