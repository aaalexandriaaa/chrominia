import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewTools extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Tools</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Tool
        </Link>
      </>
    );
  }
}
 
export default ViewTools;