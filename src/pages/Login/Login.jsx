import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const { email, pw } = this.state
    return (
      <>
        <h1 id='login-h1'>Log In</h1>
        <main className="Login">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group autoComplete='off' controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                value={email}
                name="email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group autoComplete='off' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={pw}
                name="pw"
                onChange={this.handleChange}
              />
            </Form.Group>
            <div className='button-div'>
              <Button className='greenButton' id='button' type="submit">
                Log In
  </Button>&nbsp;&nbsp;&nbsp;
          <Link className='redButton' id='button' to="/">
                Cancel
          </Link>
            </div>
          </Form>
        </main>
      </>
    );
  }
}

export default LoginPage;

