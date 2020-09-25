import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import "./App.css";
import AddImage from '../AddImage/AddImage'
import AddProject from '../AddProject/AddProject'
import AddSupply from '../AddSupply/AddSupply'
import AllSupplies from '../AllSupplies/AllSupplies'
import EditImage from '../EditImage/EditImage'
import EditProfile from '../EditProfile/EditProfile'
import EditProject from '../EditProject/EditProject'
import Gallery from '../Gallery/Gallery'
import LandingPage from '../LandingPage/LandingPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Projects from '../Projects/Projects'
// import Users from '../Users/Users'
import ViewImage from '../ViewImage/ViewImage'
import ViewWishList from '../ViewWishList/ViewWishList'
import SupplyDetails from '../SupplyDetails/SupplyDetails'
import AddWishList from '../AddWishList/AddWishList'
import userService from '../../services/userService'

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleUpdateUser = async updatedUserData => {
    await userService.update(updatedUserData)
    this.setState({ user: authService.getUser() })
    this.props.history.push(`profile/${updatedUserData._id}`)
    // .then(() => this.props.history.push(`profile/${updatedUserData._id}`))
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <main>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <Signup
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <Login
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/addimage"
            render={({ history }) => (
              authService.getUser() ?
                <AddImage
                  user={this.state.user}
                  history={history}
                />
                :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/addproject"
            render={({ history }) => (
              authService.getUser() ?
              <AddProject
                history={history}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/addsupply"
            render={({ history }) => (
              authService.getUser() ?
              <AddSupply
                history={history}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/addwishlist"
            render={({ history }) => (
              authService.getUser() ?
              <AddWishList
                history={history}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/allsupplies"
            render={() => (

              authService.getUser() ?
              <AllSupplies />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/editimage"
            render={({ location, history }) => (

              authService.getUser() ?
              <EditImage
                location={location}
                history={history}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/editprofile"
            render={({ location, history }) => (
              authService.getUser() ?

              <EditProfile
                history={history}
                location={location}
                handleUpdateUser={this.handleUpdateUser}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/editproject"
            render={({ history, location }) => (
              authService.getUser() ?
              <EditProject
                history={history}
                location={location}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/gallery/:id"
            render={({ match }) => (
              <Gallery
                match={match}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/profile/:id"

            render={({ match }) => (
              <ProfilePage
                user={this.state.user}
                match={match}
              />
             
            )}

          />
          <Route
            exact
            path="/projectdetails/:id"
            render={({ match, history }) => (
              
              <ProjectDetails
                match={match}
                history={history}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/projects/:id"
            render={({ match }) => (
              <Projects
                match={match}
              />
            )}
          />
          <Route
            exact
            path="/supplydetails/:supply"
            render={({ match }) => (
              authService.getUser() ?
              <SupplyDetails
                match={match}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/viewimage/:id"

            render={({ match, history }) => (


              <ViewImage
                match={match}
                history={history}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/viewwishlist"
            render={() => (
              authService.getUser() ?
              <ViewWishList />
              :
              <Redirect to='/login' />
            )}
          />
          {/* <Route
            path="/users"
            render={() => (
              <Users />
            )}
          /> */}
        </main>
      </>
    );
  }
}

export default App;
