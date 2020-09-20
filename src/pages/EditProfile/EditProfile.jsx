import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class EditProfile extends Component {
  state = {
    invalidForm: false,
    formData: {
      name: '',
      icon: '',
    }
  }

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateUser(this.state.formData);
  };

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Edit Profile</h1>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>User Name</label>
              <input
                className="form-control"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>User Icon</label>
              <input
                id="iconUrl"
                name="icon"
                value={this.state.formData.icon}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={this.state.invalidForm}
            >
              Update User
                    </button>
            <br />
            <Link to="/profile">
              CANCEL
                </Link>
          </form>
        </div>
      </>
    )
  }
}

export default EditProfile;