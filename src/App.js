import React, { Component } from 'react';
import Login from './components/login.js'
import Signup from './components/signup.js'
import DashBoard from './containers/user_dashboard.js'
import './App.css';
// import { Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
// import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { getCurrentUser } from './redux/actions.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  getUserData = () => {
    // stuff
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="routes">
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={() => <DashBoard logout={this.logout}/>} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { currentUser: (user) => dispatch(getCurrentUser(user)) }
}

export default connect(null, mapDispatchToProps)(App);
