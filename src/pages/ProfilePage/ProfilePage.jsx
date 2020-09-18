import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>ProfilePage</h1>
                <Link to="/editprofile">
                    Edit Profile
                </Link><br />
            </>
        );
    }
}

export default ProfilePage;