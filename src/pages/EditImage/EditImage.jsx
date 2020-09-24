import React, { Component } from 'react';
import * as imageAPI from '../../services/images-api'
import Button from 'react-bootstrap/Button'

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
        <Button href={`/gallery/${image.user}`} className='yellowButton' id='button'>
          Back to Gallery
                </Button>
        <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
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
          </div><br></br>
          <Button
            className='purpleButton'
            id='button'
            type="submit"
            disabled={this.state.invalidForm}
          >
            Update Image
                    </Button>
        </form>
      </>
    );
  }
}

export default EditImage;