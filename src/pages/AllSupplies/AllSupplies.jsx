import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SuppliesCard from '../../components/SuppliesCard/SuppliesCard'
import * as supplyAPI from '../../services/supplies-api'
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
        <Link
          to={{
            pathname: '/addsupply'
          }}
        >
          Add Supply
        </Link>
        <Link
          to={{
            pathname: '/viewwishlist'
          }}
        >
          View Wish List
        </Link>
        <div className="supply-card-container">
          <Link
            to={{
              pathname: '/viewbrushes'
            }}
          >
            <h3>Brushes</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('brush')}
            />  
          </Link>
          <Link
            to={{
              pathname: '/viewmaterials'
            }}
          >
            <h3>Materials</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('material')}
            />  
          </Link>
          <Link
            to={{
              pathname: '/viewmodels'
            }}
          >
            <h3>Models</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('model')}
            />  
          </Link>
          <Link
            to={{
              pathname: '/viewother'
            }}
          >
            <h3>Other</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('other')}
            />  
          </Link>
          <Link
            to={{
              pathname: '/viewpaintaccs'
            }}
          >
            <h3>Paint Accessories</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('paintAcc')}
            /> 
          </Link>
          <Link
            to={{
              pathname: '/viewpaints'
            }}
          >
            <h3>View All Paints</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('paint')}
            /> 
          </Link>
          <Link
            to={{
              pathname: '/viewtools'
            }}
          >
            <h3>Tools</h3>
            <SuppliesCard 
              supplies = {this.pullSupply('tool')}
            /> 
          </Link>
        </div>
        
        
      </>
    );
  }
}
 
export default AllSupplies;