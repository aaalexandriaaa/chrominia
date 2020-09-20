import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = (props) => {
  return (
    <div>
      <h1>{props.user.name}'s profile</h1>
      <Link to="/editprofile">Edit Profile</Link>
      <br />
      <Link to="/projects">Projects</Link>
      <br />
      <Link to="/allsupplies">Supplies</Link>
    </div>
  )
}


// class ProfilePage extends Component {
//   state = {
//     name: '',
//     email: ''
//   }
//   render() {
//     return (
//       <>
//         <h1>Profile Page of {this.state.user.name}</h1>
//         <Link to="/editprofile">
//           Edit Profile
//                 </Link><br />
//       </>
//     );
//   }
// }

export default ProfilePage;