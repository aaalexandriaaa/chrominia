import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewPaintAcc extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Paint Accessories</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Paint Accessory
        </Link>
      </>
    );
  }
}
 
export default ViewPaintAcc;