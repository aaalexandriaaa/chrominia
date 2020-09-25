import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class EditProfile extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state
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
        <h1>Edit Profile</h1>
        <div className='form-div'>
          <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                className="form-control"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Form.Label>User Icon</Form.Label>
              <Form.Control
                id="iconUrl"
                name="icon"
                value={this.state.formData.icon}
                onChange={this.handleChange}
              />
            </div>
            <div className='editProfile-button-div'>
              <Button
                className='purpleButton'
                id='button'
                type="submit"
                disabled={this.state.invalidForm}
              >
                Update User
                    </Button>
              <br />
              <Button
                className='redButton'
                id='button'
                href={`/profile/${this.props.location.state._id}`}>
                CANCEL
            </Button>
            </div>
          </Form>
        </div>
      </>
    )
  }
}

export default EditProfile;