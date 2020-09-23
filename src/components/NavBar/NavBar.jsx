import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div><a href={`/profile/${user._id}`} >Welcome, {user.name}</a></div>
          <div><a href="/">Home</a></div>
          <div><a href={`/projects/${user._id}`}>Projects</a></div>
          <div><a href={`/gallery/${user._id}`}>Gallery</a></div>
          <div><a href="/allsupplies">Supplies</a></div>
          <div><a href="/viewwishlist">Wish List</a></div>
          <div><a href=" " onClick={handleLogout}>Log Out</a></div>
        </nav>
        :
        <Navbar className="justify-content-between">
          <div><a href="/login" className="nav-link">Log In</a></div>
          <div><a href="/signup" className="nav-link">Sign Up</a></div>
        </Navbar>
      }
    </>
  )
}

export default NavBar;