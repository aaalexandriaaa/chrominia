import React, { Component } from 'react'

class SupplyTable extends Component {
  state = {

  }

  hasSupply = (supplies, supID) => {
    let result = false
    supplies.forEach(s =>{
        if (s._id === supID) {
            result = true
        }
    })
    return result
  }

  render() { 
    return (
      <div>
        <h3>{this.props.type}</h3>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Paint Type</th>
                <th>Color</th>
                <th>Size</th>
                <th>Brand</th>
                <th>On Wish List?</th>
                <th>Attatch to Project?</th>
            </tr>
        </thead>
        <tbody>
            {this.props.supplies.map((supply, idx) => 
                    <tr key={idx}>
                    <td>{supply.name}</td>
                    <td>{supply.paintType}</td>
                    <td>{supply.color}</td>
                    <td>{supply.size}</td>
                    <td>{supply.brand}</td>
                    <td>{supply.own ? '' : 'Y'}</td>
                    <td>{this.hasSupply(this.props.project.supplies, supply._id) ? 
                                "Attatched"
                            :
                                <button onClick={() => this.props.handleAttachSupply(supply._id, this.props.projectID)}>Attach</button>
                        }</td>
                </tr>
            )}
        </tbody>
        </table>
      </div>
    );
  }
}
 
export default SupplyTable;