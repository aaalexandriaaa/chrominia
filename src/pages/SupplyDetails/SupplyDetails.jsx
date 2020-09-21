import React, { Component } from 'react';
import * as supplyAPI from '../../services/supplies-api'

class SupplyDetails extends Component {
  state = {
    supplies: []
  }

  async componentDidMount() {
    const allSupplies = await supplyAPI.getForUser();
    const supplies = allSupplies.filter(each => each.type === this.props.match.params.supply)
    this.setState({ supplies })
  }

  render() { 
    return (
      <>
       <h1>{this.props.match.params.supply} Details</h1>
       {this.props.match.params.supply === 'paint' ?
          <>
          Paint
          </>
        :
          <>
          Not paint
          </>
        }
      </>
    );
  }
}
 
export default SupplyDetails;