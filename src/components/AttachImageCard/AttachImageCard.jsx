import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class AttachImageCard extends Component {
  state = {

  }

  hasImage = (images, imgID) => {
    let result = false
    images.forEach(i => {
      if (i._id === imgID) {
        result = true
      }
    })
    return result
  }

  render() {
    return (
      <>
        <img width="200" src={this.props.image.url} alt={this.props.image.title}></img>
        {this.hasImage(this.props.project.images, this.props.image._id) ?
          <Button onClick={() => this.props.handleRemoveImage(this.props.image._id, this.props.projectID)} className='redButton' id='button'>Detatch Image</Button>
          :
          <Button onClick={() => this.props.handleAttachImage(this.props.image._id, this.props.projectID)} className='greenButton' id='button'>Attatch Image</Button>
        }
      </>
    );
  }
}

export default AttachImageCard;