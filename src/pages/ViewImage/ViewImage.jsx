import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import authService from '../../services/authService'

class ViewImage extends Component {
    state = {
        image: {},
    }
    
    async componentDidMount() {
        const image = await imageAPI.getImage(this.props.match.params.id)
        this.setState({ image })
    }

    handleDeleteImage = async id => {
        if (authService.getUser()) {
          await imageAPI.deleteOne(id)
          .then(() => this.props.history.push('/gallery'));
        } else {
          this.props.history.push('/login')
        }
      }

    render() {
        const image  = this.state.image
        const user = this.props.user
        return (
            <> 
                <div>
                    <h1>{image.title}</h1>
                    <img src={image.url} width="700" alt={image.description}></img>
                    <p>{image.description}</p>
                
                {user && (user._id === image.user) &&
                        <>
                            <button type="submit" onClick={() => this.handleDeleteImage(image._id)}>    
                                Delete Image
                            </button><br></br>
                            <Link 
                                to={{
                                    pathname: '/editimage',
                                    state: {image}
                                }}
                            >
                                Edit image
                            </Link><br></br>
                        </>
                        }
                        <br></br>
                <Link to="/gallery">
                    Back to Gallery
                </Link><br />
                </div>
            </>
        );
    }
}

export default ViewImage;
