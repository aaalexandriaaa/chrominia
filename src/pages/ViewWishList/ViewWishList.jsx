import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewWishList extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Wish List</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add to Wish List
        </Link>
      </>
    );
  }
}
 
export default ViewWishList;