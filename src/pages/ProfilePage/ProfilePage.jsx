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
    const user = this.props.user
    return (
      <>
      <div>
        {/* <h1>Welcome, {this.props.user.name}</h1> */}
        
          <img src={this.props.user.icon} alt="User Icon" width="150"></img>
          <p>Name: {this.props.user.name}</p>
          <p>Member Since: {this.props.user.createdAt}</p>
          <Link to={`/projects/${this.props.user._id}`}>Projects</Link><br></br>
          <br></br>
          {user && (user._id === this.state.user._id) &&
            <Link 
            to={{
              pathname: "/editprofile",
              state: this.props.user
            }}
            >
              Edit Profile
            </Link>
          }
        
        <br />
        
        <br />
        {/* <Link to="/allsupplies">Supplies</Link> */}
        <br />
      </div>
    </>
    );
  }
}
 
export default ProfilePage;