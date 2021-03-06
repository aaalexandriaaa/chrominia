import React, { Component } from 'react';
import * as supplyAPI from '../../services/supplies-api'
import './SupplyDetails.css'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const types = [
  ['paint', 'Paint'], ['brush', 'Brush'], ['model', 'Model'], ['paintacc', 'Paint Accessory'], ['other', 'Other Supply'], ['tool', 'Tool'], ['material', 'Material']
]

class SupplyDetails extends Component {
  state = {
    supplies: []
  }

  async componentDidMount() {
    const allSupplies = await supplyAPI.getForUser();
    const supplies = allSupplies.filter(each => each.type === this.props.match.params.supply)
    this.setState({ supplies })
  }

  handleWishListSupply = async supply => {
    await supplyAPI.wishList(supply)
    this.setState(state => ({
      supplies: state.supplies.filter(s => s._id !== supply._id)
    }))
  }

  handleDeleteSupply = async supply => {
    await supplyAPI.deleteOne(supply)
    this.setState(state => ({
      supplies: state.supplies.filter(s => s._id !== supply._id)
    }))
  }

  printType = type => {
    let result
    types.forEach(each => {
      if (each[0] === type) {
        result = each[1]
      }
    })
    return result
  }

  render() {
    const type = this.printType(this.props.match.params.supply)
    return (
      <>
        <h1>{type} Details</h1>
        <div className='button-div' id='add-supply-button'>
          <Button
            className="greenButton"
            id='button'
            href={'/addsupply'}
          >
            Add Supply
        </Button>
        </div>
        <div className='table-div'>
          <Table striped bordered hover size='sm' variant='light'>
            <thead>
              <tr>
                <th>Name</th>
                {this.props.match.params.supply === 'paint' &&
                  <>
                    <th>Paint Type</th>
                    <th>Color</th>
                  </>
                }
                <th>Size</th>
                <th>Brand</th>
                <th>Wish List?</th>
                <th>Remove?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.supplies.map((supply, idx) =>
                <tr key={idx}>
                  <td>{supply.name}</td>
                  {this.props.match.params.supply === 'paint' &&
                    <>
                      <td>{supply.paintType}</td>
                      <td>{supply.color}</td>
                    </>
                  }
                  <td>{supply.size}</td>
                  <td>{supply.brand}</td>
                  <td align='center'><button onClick={() => this.handleWishListSupply(supply)} className='irisButton' id='button'>Wish List</button></td>
                  <td align='center'><button onClick={() => this.handleDeleteSupply(supply)} className='redButton' id='button'>Remove</button></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default SupplyDetails;