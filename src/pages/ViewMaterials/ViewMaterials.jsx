import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewMaterials extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Materials</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Material
        </Link>
      </>
    );
  }
}
 
export default ViewMaterials;