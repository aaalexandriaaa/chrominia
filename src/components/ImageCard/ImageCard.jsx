import React from 'react'
import '../../pages/Gallery/Gallery.css'

const ImageCard = ({ image }) => {
  return (
    <div className='image-card'>
      <h3>{image.title}</h3>
      <img src={image.url} width="300" alt={image.description}></img>
    </div>
  );
}

export default ImageCard;