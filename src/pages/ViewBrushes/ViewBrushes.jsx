import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewBrushes extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Brushes</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Brush
        </Link>
      </>
    );
  }
}
 
export default ViewBrushes;