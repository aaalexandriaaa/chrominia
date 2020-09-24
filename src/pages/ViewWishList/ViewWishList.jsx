import React, { Component } from 'react'
import * as supplyAPI from '../../services/supplies-api'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './ViewWishList.css'

class ViewWishList extends Component {
  state = {
    wishList: []
  }

  async componentDidMount() {
    const wishList = await supplyAPI.getWishList();
    this.setState({ wishList })
  }

  handleOwnSupply = async supply => {
    await supplyAPI.ownSupply(supply)
    this.setState(state => ({
      wishList: state.wishList.filter(s => s._id !== supply._id)
    }))
  }

  handleDeleteSupply = async supply => {
    await supplyAPI.deleteOne(supply)
    this.setState(state => ({
      wishList: state.wishList.filter(s => s._id !== supply._id)
    }))
  }

  render() {
    return (
      <>
        <h1>Supply Wish List</h1>
        <div className="wish-button-div">
          <Button
            className="greenButton"
            id='button'
            href={'/addwishlist'}
          >
            Add to Wish List
        </Button>
        </div>
        <div className='table-div'>
          <Table striped bordered hover size='sm' variant='light' className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Paint Type</th>
                <th>Color</th>
                <th>Size</th>
                <th>Brand</th>
                <th>Own?</th>
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
                  <td id='irisbutton-td'><Button onClick={() => this.handleOwnSupply(supply)} className='irisButton' id='button'>Own Supply</Button></td>
                  <td id='redbutton-td'><Button onClick={() => this.handleDeleteSupply(supply)} className='redButton' id='button'>Remove</Button></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default ViewWishList;