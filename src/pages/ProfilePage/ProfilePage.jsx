import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/userService'
import './ProfilePage.css'

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
        {/* <h1>Welcome, {this.props.user.name}</h1> */}
        <div className="profile-div">
          <img src={this.state.user.icon} alt="User Icon" width="150"></img>
          <p>Name: {this.state.user.name}</p>
          <p>Member Since: {this.state.user.createdAt}</p>
          <div className='profile-button-div'>
            {user && (user._id === this.state.user._id) &&
              <Link
                id='button'
                className='purpleButton'
                to={{
                  pathname: "/editprofile",
                  state: this.props.user
                }}
              >
                Edit Profile
            </Link>
            }
            <Link to={`/projects/${this.state.user._id}`} className='yellowButton' id='button'>Projects</Link>

          </div>
        </div>

        <br />

        <br />
        {/* <Link to="/allsupplies">Supplies</Link> */}
        <br />
      </>
    );
  }
}

export default ProfilePage;