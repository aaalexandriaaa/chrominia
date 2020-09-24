import React, { Component } from 'react'
import * as supplyAPI from '../../services/supplies-api'
import Button from 'react-bootstrap/Button'
import './AddWishList.css'
import Form from 'react-bootstrap/Form'

class AddWishList extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      type: '',
      paintType: '',
      size: '',
      color: '',
      brand: '',
    }
  }

  formRef = React.createRef()

  handleAddSupply = async newWishListData => {
    await supplyAPI.wishlist(newWishListData)
      .then(() => this.props.history.push('/viewwishlist'))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleAddSupply(this.state.formData)
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  }

  render() {
    return (
      <>
        <h1>Add to Wish List</h1>
        <div className='form-div'>
          <Form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div>
              <Form.Label style={{ padding: '5px' }}>Name</Form.Label>
              <Form.Control name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
            </div>
            <div>
              <Form.Label >Type</Form.Label>
              <Form.Control as="select" name="type" onChange={this.handleChange} value={this.state.formData.type} required>
                <option value=""></option>
                <option value="paint">Paint</option>
                <option value="tool">Tool</option>
                <option value="brush">Brush</option>
                <option value="paintacc">Paint Accessory</option>
                <option value="material">Material</option>
                <option value="model">Model</option>
                <option value="other">Other</option>
              </Form.Control>
            </div>
            {this.state.formData.type === "paint" &&
              <>
                <div>
                  <Form.Label style={{ padding: '5px' }}>Type of Paint</Form.Label>
                  <Form.Control name="paintType" type="text" value={this.state.formData.paintType} onChange={this.handleChange} />
                </div>
                <div>
                  <Form.Label >Color</Form.Label>
                  <Form.Control name="color" type="text" value={this.state.formData.color} onChange={this.handleChange} />
                </div>

              </>
            }
            <div>
              <Form.Label style={{ padding: '5px' }} >Size</Form.Label><br></br>
              <Form.Control name="size" type="text" value={this.state.formData.size} onChange={this.handleChange} />
            </div>
            <div>
              <Form.Label style={{ padding: '5px' }} >Brand</Form.Label><br></br>
              <Form.Control name="brand" type="text" value={this.state.formData.brand} onChange={this.handleChange} />
            </div>
            <div className='button-div'>
              <Button
                className='greenButton'
                id='button'
                type="submit"
                disabled={this.state.invalidForm}
              >
                Add to Wish List
            </Button>
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default AddWishList;