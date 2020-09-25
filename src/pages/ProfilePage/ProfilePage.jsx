import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/userService'
import './ProfilePage.css'

class ProfilePage extends Component {
  state = {
    user: { createdAt: '' }
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
          <img src={this.state.user.icon} alt="User Icon" width="150" className="profile"></img>
          <p>Name: {this.state.user.name}</p>
          <p>Member Since: {this.state.user.createdAt.slice(0, 10)}</p>
          <div className='profile-button-div'>
            <Link to={`/projects/${this.state.user._id}`} className='yellowButton' id='button'>Projects</Link>
            <Link to={`/gallery/${this.state.user._id}`} className='yellowButton' id='button'>Gallery</Link>

          </div>
          <div id='edit-profile-div'>
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