import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'
import ImageCard from '../../components/ImageCard/ImageCard'

class Gallery extends Component {
    state = {
        images: []
    }

    async componentDidMount() {
        const images = await imageAPI.getForUser(this.props.match.params.id);
        this.setState({ images })
    }

    render() {
        const user = this.props.user
        return (
            <>
                <h1>Gallery</h1>
                {user && (user._id === this.props.match.params.id) &&
                <>
                <Link 
                    to={{
                       pathname: "/addimage",
                    }}
                >
                    Add Image
                </Link><br />
                </>}
                {this.state.images.map((image, idx) =>
                    <Link
                        key={idx}
                        to={{
                        pathname: `/viewimage/${image._id}`
                        }}
                    >
                        <ImageCard 
                            image={image}
                        />
                    </Link>
                    )}
                {/* <Link to="/wiewimage">
                    View Image
                </Link><br />
                <Link to="/editimage">
                    Edit Image
                </Link><br /> */}
            </>
        );
    }
}

export default Gallery;