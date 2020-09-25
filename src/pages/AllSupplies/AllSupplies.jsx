import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as supplyAPI from '../../services/supplies-api'
import Button from 'react-bootstrap/Button'
import './AllSupplies.css'

class AllSupplies extends Component {
  state = {
    supplies: []
  }

  async componentDidMount() {
    const supplies = await supplyAPI.getForUser();
    this.setState({ supplies })
  }

  pullSupply = supply => {
    const list = this.state.supplies.filter(each => each.type === supply)
    return list
  }

  render() {
    return (
      <>
        <h1>All Supplies</h1>
        <div className="supply-card-container">
          <Link
            to={{
              pathname: '/supplydetails/brush'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/brush.png" alt="brush logo" />
            <h4>View All Brushes</h4>
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/material'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/material.png" alt="materials logo" />
            <h4>View All Materials</h4>
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/model'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/model.png" alt="models logo" />
            <h4>View All Models</h4>
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/other'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/other.png" alt="miscellaneous logo" />
            <h4>View Miscellaneous</h4>
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/paintacc'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/paintacc.png" alt="paint accessories logo" />
            <h4>View All Paint Accessories</h4>
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/paint'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/paint.png" alt="paint logo" />
            <h4>View All Paints</h4>
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/tool'
            }}
          >
            <img style={{ width: "100px", height: "100px" }} src="/images/tool.png" alt="tool logo" />
            <h4>View All Tools</h4>
          </Link>
        </div>
        <div className="supply-header">
          <Button
            className="greenButton"
            id='button'
            href={'/addsupply'}
          >
            Add Supply
        </Button>
          <Button
            className='yellowButton'
            id='button'
            href='/viewwishlist'
          >
            View Wish List
        </Button>
        </div>
      </>
    );
  }
}

export default AllSupplies;