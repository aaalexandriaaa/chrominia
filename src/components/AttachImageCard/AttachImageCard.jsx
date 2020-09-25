import React, { Component } from 'react';

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
        <img width="180" src={this.props.image.url} alt={this.props.image.title}></img>
        {this.hasImage(this.props.project.images, this.props.image._id) ?
          <button onClick={() => this.props.handleRemoveImage(this.props.image._id, this.props.projectID)} className='redButton'>Detatch Image</button>
          :
          <button onClick={() => this.props.handleAttachImage(this.props.image._id, this.props.projectID)} className='greenButton'>Attatch Image</button>
        }
      </>
    );
  }
}

export default AttachImageCard;