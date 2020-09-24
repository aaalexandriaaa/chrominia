import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SuppliesCard from '../../components/SuppliesCard/SuppliesCard'
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
        <div className="supply-card-container">
          <Link
            to={{
              pathname: '/supplydetails/brush'
            }}
          >
            <h3>Brushes</h3>
            <SuppliesCard
              supplies={this.pullSupply('brush')}
            />
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/material'
            }}
          >
            <h3>Materials</h3>
            <SuppliesCard
              supplies={this.pullSupply('material')}
            />
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/model'
            }}
          >
            <h3>Models</h3>
            <SuppliesCard
              supplies={this.pullSupply('model')}
            />
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/other'
            }}
          >
            <h3>Other</h3>
            <SuppliesCard
              supplies={this.pullSupply('other')}
            />
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/paintacc'
            }}
          >
            <h3>Paint Accessories</h3>
            <SuppliesCard
              supplies={this.pullSupply('paintacc')}
            />
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/paint'
            }}
          >
            <h3>View All Paints</h3>
            <SuppliesCard
              supplies={this.pullSupply('paint')}
            />
          </Link>
          <Link
            to={{
              pathname: '/supplydetails/tool'
            }}
          >
            <h3>Tools</h3>
            <SuppliesCard
              supplies={this.pullSupply('tool')}
            />
          </Link>
        </div>


      </>
    );
  }
}

export default AllSupplies;