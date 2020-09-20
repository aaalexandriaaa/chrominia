import React from 'react'

const ImageCard = ( {image} ) => {
  return (
    <div>
      <h3>{image.title}</h3>
      <img src={image.url} width="400" alt={image.description}></img>
      <p>{image.description}</p>
    </div>
  );
}
 
export default ImageCard;