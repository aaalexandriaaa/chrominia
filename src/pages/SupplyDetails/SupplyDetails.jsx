import React, { Component } from 'react';
import * as supplyAPI from '../../services/supplies-api'

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

  printType = type => {
    let result
    types.forEach(each => {
      if(each[0] === type){
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
       <table>
         <thead>
           <tr>
            <th>Name</th>
            {this.props.match.params.supply === 'paint' ?
            <>
            <th>Paint Type</th>
            <th>Color</th>
            </>
            :
            <>
            </>
            }
            <th>Size</th>
            <th>Brand</th>
            <th>Wish Lish?</th>
            <th>Remove?</th>
          </tr>
         </thead>
         <tbody>
          {this.state.supplies.map((supply, idx) =>
            <tr key={idx}>
              <td>{supply.name}</td>
              {this.props.match.params.supply === 'paint' ?
                <>
                <td>{supply.paintType}</td>
                <td>{supply.color}</td>
                </>
              :
                <>
                </>
              }
              <td>{supply.size}</td>
              <td>{supply.brand}</td>
              
            </tr>
          )}
       
            
          </tbody>
        </table>
      </>
    );
  }
}
 
export default SupplyDetails;