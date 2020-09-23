import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as supplyAPI from '../../services/supplies-api'
import Table from 'react-bootstrap/Table'
import './ViewWishList.css'

class ViewWishList extends Component {
  state = {
    wishList: []
  }

  async componentDidMount() {
    const wishList = await supplyAPI.getWishList();
    this.setState({ wishList })
  }

  handleOwnSupply = async supply => {
    await supplyAPI.ownSupply(supply)
    this.setState(state => ({
      wishList: state.wishList.filter(s => s._id !== supply._id)
    }))
  }

  handleDeleteSupply = async supply => {
    await supplyAPI.deleteOne(supply)
    this.setState(state => ({
      wishList: state.wishList.filter(s => s._id !== supply._id)
    }))
  }

  render() {
    return (
      <>
        <h1>Supply Wish List</h1>
        <div className="wish-button-div">
          <Link
            className="addWishButton"
            to={{
              pathname: '/addwishlist'
            }}
          >
            Add to Wish List
        </Link>
        </div>
        <Table striped bordered hover size='sm' variant='light'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Paint Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Brand</th>
              <th>Own?</th>
              <th>Remove?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.wishList.map((supply, idx) =>
              <tr key={idx}>
                <td>{supply.name}</td>
                <td>{supply.type}</td>
                <td>{supply.paintType}</td>
                <td>{supply.color}</td>
                <td>{supply.size}</td>
                <td>{supply.brand}</td>
                <td><button onClick={() => this.handleOwnSupply(supply)} className='ownButton'>Own Supply</button></td>
                <td><button onClick={() => this.handleDeleteSupply(supply)} className='removeButton'>Remove</button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    );
  }
}

export default ViewWishList;