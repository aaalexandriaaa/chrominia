import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewPaints extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Paints</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Paint
        </Link>
      </>
    );
  }
}
 
export default ViewPaints;