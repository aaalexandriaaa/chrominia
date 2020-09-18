import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class AllSupplies extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>All Supplies</h1>
        <Link
          to={{
            pathname: '/viewbrushes'
          }}
        >
          View All Brushes
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewmaterials'
          }}
        >
          View All Materials
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewmodels'
          }}
        >
          View All Models
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewother'
          }}
        >
          View Other
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewpaintaccs'
          }}
        >
          View All Paint Accessories
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewpaints'
          }}
        >
          View All Paints
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewtools'
          }}
        >
          View All Tools
        </Link><br></br>
        <Link
          to={{
            pathname: '/viewwishlist'
          }}
        >
          View Wish List
        </Link><br></br>
        <br></br>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Supply
        </Link>
      </>
    );
  }
}
 
export default AllSupplies;