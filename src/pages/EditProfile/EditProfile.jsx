import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import userService from '../../services/userService';

class EditProfile extends Component {
  state = {
    users: [],
    invalidForm: false,
    formData: {
      name: '',
      icon: '',
    }
  }

  formRef = React.createRef();

  handleUpdateUser = async updatedUserData => {
    await userService.update(updatedUserData)
      .then(() => this.props.history.push(`profile/${updatedUserData._id}`))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleUpdateUser(this.state.formData);
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

            <Link
              to='/profile/:id'>
              CANCEL
                </Link>

          </form>
        </div>
      </>
    )
  }
}

export default EditProfile;