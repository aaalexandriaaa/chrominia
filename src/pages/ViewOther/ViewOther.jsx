import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ViewOther extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>View Other</h1>
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Other Suppply
        </Link>
      </>
    );
  }
}
 
export default ViewOther;