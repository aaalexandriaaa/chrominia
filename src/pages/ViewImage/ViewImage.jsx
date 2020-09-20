import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getImage } from '../../services/images-api'

class ViewImage extends Component {
    state = {
        image: {}
    }
    
    async componentDidMount() {
        const image = await getImage(this.props.match.params.id)
        this.setState({ image })
    }

    render() {
        const image  = this.state.image
        return (
            <> 
                <div>
                    <h1>{image.title}</h1>
                    <img src={image.url} width="700" alt={image.description}></img>
                    <p>{image.description}</p>
                </div>
                <Link to="/gallery">
                    Back to Gallery
                </Link><br />
                <Link to="/editimage">
                    Edit Image
                </Link><br />
            </>
        );
    }
}

export default ViewImage;
