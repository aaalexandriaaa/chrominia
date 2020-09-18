import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewModels extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Models</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Model Kit
        </Link>
      </>
    );
  }
}
 
export default ViewModels;