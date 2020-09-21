import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as imageAPI from '../../services/images-api'

class AddImage extends Component {
    state = {
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

    handleSubmit = e =>{
        e.preventDefault();
        this.handleAddImage(this.state.formData)
    }

    handleChange = e => {
       const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
       formData,
       invalidForm: !this.formRef.current.checkValidity()
       });
    }

    render() {
        return (
            <>
                <h1>Add an Image</h1>
                <Link to="/gallery">
                    Back to Gallery
                </Link><br />
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
                    </div><br></br>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Add Image
                    </button>                           
                </form>
            </>
        );
    }
}

export default AddImage;