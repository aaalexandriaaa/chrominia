import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as supplyAPI from '../../services/supplies-api'

class ViewWishList extends Component {
  state = {
    wishList: []
  }

  async componentDidMount() {
    const wishList = await supplyAPI.getWishList();
    this.setState({ wishList })
  }

  render() { 
    return (
      <>
        <h1>View Wish List</h1>
        <Link
          to={{
            pathname: '/addwishlist'
          }}
        >
          Add to Wish List
        </Link>
      </>
    );
  }
}
 
export default ViewWishList;