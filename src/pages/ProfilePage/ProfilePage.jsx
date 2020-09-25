import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/userService'
import './ProfilePage.css'

class ProfilePage extends Component {
  state = {
    profile: { createdAt: '' }
  }

  async componentDidMount() {
    const profile = await userAPI.showProfile(this.props.match.params.id);
    this.setState({ profile })
  }

  render() {
    const user = this.props.user
    const profile = this.state.profile
    return (
      <>
        {/* <h1>Welcome, {this.props.user.name}</h1> */}
        <div className="profile-div">
          <img src={profile.icon} alt="User Icon" width="150" className="profile"></img>
          <p>Name: {profile.name}</p>
          <p>Member Since: {profile.createdAt.slice(0, 10)}</p>
          <div className='profile-button-div'>
            <Link to={`/projects/${profile._id}`} className='yellowButton' id='button'>Projects</Link>
            <Link to={`/gallery/${profile._id}`} className='yellowButton' id='button'>Gallery</Link>

          </div>
          <div id='edit-profile-div'>
            {user && (user._id === profile._id) &&
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