import React, { Component } from 'react';
import Login from './components/login.js'
import Signup from './components/signup.js'
import DashBoard from './containers/user_dashboard.js'
import './App.css';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { withRouter } from "react-router";

class App extends Component {

  logout = () => {
    localStorage.removeItem("tokemon")
  }

  renderDashBoardOrNah = () => {
    if (localStorage.tokemon === undefined && this.props.location.pathname === "/dashboard"){
      return (<Redirect to="/login"/>)
    } else {
      return (<Route exact path="/dashboard" component={() => <DashBoard logout={this.logout}/>} />)
    }
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {this.renderDashBoardOrNah()}
      </div>
    );
  }
}

export default withRouter(App);
