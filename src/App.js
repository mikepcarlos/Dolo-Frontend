import React, { Component } from 'react';
import Login from './components/login.js'
import Signup from './components/signup.js'
import DashBoard from './containers/user_dashboard.js'
import './App.css';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { withRouter } from "react-router";

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      currentUser: {}
    }
  }

  handleUser = (user) => {
    let safeUser = {...user}
    this.setState({
      currentUser: safeUser
    })
  }

  handleNewUser = (userData) => {
    console.log(userData)
  }

  renderDashBoardOrNah = () => {
    if (localStorage.length !== 1 && this.props.location.pathname === "/dashboard"){
      return (<Redirect to="/login"/>)
    } else {
      return (<Route exact path="/dashboard" component={DashBoard} />)
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={() => <Login handleUser={this.handleUser}/>} />
        <Route exact path="/signup" component={() => <Signup handleNewUser={this.handleNewUser}/>} />
        {this.renderDashBoardOrNah()}
      </div>
    );
  }
}

export default withRouter(App);
