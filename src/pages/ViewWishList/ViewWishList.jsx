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
        </Link><br></br>
        <table>
         <thead>
           <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Paint Type</th>
            <th>Color</th>
            <th>Size</th>
            <th>Brand</th>
            <th>Wish Lish?</th>
            <th>Remove?</th>
          </tr>
         </thead>
         <tbody>
          {this.state.wishList.map((supply, idx) =>
            <tr key={idx}>
              <td>{supply.name}</td>
              <td>{supply.type}</td>
              <td>{supply.paintType}</td>
              <td>{supply.color}</td>
              <td>{supply.size}</td>
              <td>{supply.brand}</td>
              <td><button onClick={() => this.handleOwnSupply(supply)}>Wish List</button></td>
              <td><button onClick={() => this.handleDeleteSupply(supply)}>Remove</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </>
    );
  }
}
 
export default ViewWishList;