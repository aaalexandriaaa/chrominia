import React from 'react';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div><a href="/profilepage" >Welcome, {user.name}</a></div>
          <div><a href="/">Home</a></div>
          <div><a href="/projects">Projects</a></div>
          <div><a href="/gallery">Gallery</a></div>
          <div><a href="/supplies">Supplies</a></div>
          <div><a href="/wishlist">Wish List</a></div>
          <div><a href=" " onClick={handleLogout}>Log Out</a></div>
        </nav>
        :
        <nav>
          <div><a href="/login" className="nav-link">Log In</a></div>
          <div><a href="/signup" className="nav-link">Sign Up</a></div>
        </nav>
      }
    </>
  )
}

export default NavBar;