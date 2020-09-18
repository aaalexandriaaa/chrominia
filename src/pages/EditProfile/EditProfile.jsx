import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class EditProfile extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Edit Profile</h1>
                <Link to="/profile">
                    Profile
                </Link><br />
            </>
        );
    }
}

export default EditProfile;