import React from 'react';
import { Link } from 'react-router-dom';
// import ProfileCard from '../../components/ProfileCard/ProfileCard'

const ProfilePage = (props) => {
  return (
    <>
      <div>
        {/* {props.users.map(user =>
          <ProfileCard
            key={user._id}
            user={props.user}
          />
        )} */}
        <h1>Welcome, {props.user.name}</h1>
        <ul>
          <li>Email: {props.user.email}</li>
          <li>Created at: {props.user.createdAt}</li>
        </ul>
        <Link to="/editprofile">Edit Profile</Link>
        <br />
        <Link to="/projects">Projects</Link>
        <br />
        <Link to="/allsupplies">Supplies</Link>
        <br />
      </div>
    </>
  );
}

export default ProfilePage;