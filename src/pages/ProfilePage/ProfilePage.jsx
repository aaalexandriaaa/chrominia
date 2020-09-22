import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/userService'

class ProfilePage extends Component {
  state = { 
    user: {}
  }

  async componentDidMount() {
    const user = await userAPI.showProfile(this.props.match.params.id);
    this.setState({ user })
  }

  render() { 
    return (
      <>
      <div>
        <h1>Welcome, {this.props.user.name}</h1>
        
          <p>Email: {this.props.user.email}</p>
          <p>Created at: {this.props.user.createdAt}</p>
        
        <Link 
          to={{
            pathname: "/editprofile",
            state: this.props.user
          }}
        >
          Edit Profile
        </Link>
        <br />
        <Link to="/projects">Projects</Link>
        <br />
        <Link to="/allsupplies">Supplies</Link>
        <br />
      </div>
    </>
    );
  }
}
 
export default ProfilePage;