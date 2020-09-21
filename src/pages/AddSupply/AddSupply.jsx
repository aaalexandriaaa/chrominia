import React, { Component } from 'react'
import * as supplyAPI from '../../services/supplies-api'

class AddSupply extends Component {
  state = {
    invalidForm: true,
    formData: {
        name: '',
        type: '',
        paintType: '',
        size: '',
        color: '',
        brand: '',
    }
  }

  formRef = React.createRef()

  handleAddSupply = async newSupplyData => {
      await supplyAPI.create(newSupplyData)
      .then(() => this.props.history.push('/allsupplies'))
  }

  handleSubmit = e =>{
      e.preventDefault();
      this.handleAddSupply(this.state.formData)
  }

  handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
      this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
      });
  }

  render() { 
    return (
      <>
        <h1>Add Supply</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div>
                        <label >Name</label><br></br>
                        <input name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                    </div><br></br>
                    <div>
                        <label >Type</label><br></br>
                        <select name="type" onChange={this.handleChange} value={this.state.formData.type} required>
                          <option value=""></option>
                          <option value="paint">Paint</option>
                          <option value="tool">Tool</option>
                          <option value="brush">Brush</option>
                          <option value="paintacc">Paint Accessory</option>
                          <option value="material">Material</option>
                          <option value="model">Model</option>
                          <option value="other">Other</option>
                        </select>
                    </div><br></br>
                    {(this.state.formData.type==="paint") ? 
                      <>
                    <div>
                        <label >Type of Paint</label><br></br>
                        <input name="paintType" type="text" value={this.state.formData.paintType} onChange={this.handleChange} />
                    </div><br></br>
                    <div>
                        <label >Color</label><br></br>
                        <input name="color" type="text" value={this.state.formData.color} onChange={this.handleChange} />
                    </div><br></br>
                    
                      </>
                      : <> </>
                      }
                      <div>
                        <label >Size</label><br></br>
                        <input name="size" type="text" value={this.state.formData.size} onChange={this.handleChange} />
                    </div><br></br>
                    <div>
                        <label >Brand</label><br></br>
                        <input name="brand" type="text" value={this.state.formData.brand} onChange={this.handleChange} />
                    </div><br></br>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Add Supply
                    </button>                           
                </form>
      </>
    );
  }
}
 
export default AddSupply;