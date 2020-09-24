import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../pages/Signup/Signup.css'

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div className='form-div'>
        <h1>Sign Up</h1>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              autoComplete="off"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Group controlId="email" >
            <Form.Control
              type="text"
              autoComplete="off"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Group controlId="password" >
            <Form.Control
              type="password"
              autoComplete="off"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Label htmlFor="confirm">Confirm Password</Form.Label>
          <Form.Group controlId="confirm" >
            <Form.Control
              type="password"
              autoComplete="off"
              value={passwordConf}
              name="passwordConf"
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='button-div'>
            <Button className='greenButton' id='button' disabled={this.isFormInvalid()}>Sign Up</Button>
          &nbsp;&nbsp;
          <Link to="/" className='redButton' id='button'>Cancel</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignupForm;
