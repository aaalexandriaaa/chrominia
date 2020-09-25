import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <Navbar className='nav'>
          <Navbar.Brand className='logo' href="/">
            <img style={{ height: "22px" }} src="/images/chrominia.png" alt="chrominia logo" />
          </Navbar.Brand>
          <Nav.Link href={`/profile/${user._id}`} >Welcome, {user.name}</Nav.Link>
          <Nav.Link href={`/projects/${user._id}`}>Projects</Nav.Link>
          <Nav.Link href={`/gallery/${user._id}`}>Gallery</Nav.Link>
          <Nav.Link href="/allsupplies">Supplies</Nav.Link>
          <Nav.Link href="/viewwishlist">Wish List</Nav.Link>
          <Nav.Link href=" " onClick={handleLogout}>Log Out</Nav.Link>
        </Navbar>
        :
        <Navbar className="nav">
          <div><a href="/login" className="nav-link">Log In</a></div>
          <div><a href="/">
            <img style={{ height: "30px" }} src="/images/chrominia.png" alt="chrominia logo" />
          </a></div>
          <div><a href="/signup" className="nav-link">Sign Up</a></div>
        </Navbar>
      }
    </>
  )
}

export default NavBar;