import React, { Component } from 'react';
import Login from './components/login.js'
import Signup from './components/signup.js'
import DashBoard from './containers/user_dashboard.js'
import './App.css';
import { Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
// import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { getCurrentUser } from './redux/actions.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    const URL = 'http://localhost:3000/persist'
    if (localStorage.getItem("tokemon")){
      fetch(URL, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("tokemon")
        }
      })
      .then(res => res.json())
      .then(user => {
        if(!user.error){
          this.props.currentUser(user)
        } else {
          this.logout()
        }
      })
    }
  }

  logout = () => {
    localStorage.removeItem("tokemon")
  }


  render() {
    return (
      <Router>
        <div className="App">
          {console.log("In APP STEP 1")}
          <div className="routes">
            <Switch>
              <Route exact path="/login" render={(routeProps) => <Login setUser={this.props.currentUser} {...routeProps}/>}/>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard" component={() => <DashBoard logout={this.logout}/>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  if (state !== undefined){
    return {
      token: state.currentUser.jwt
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {currentUser: (user) => dispatch(getCurrentUser(user))}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
