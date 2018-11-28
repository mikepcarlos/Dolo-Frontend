import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { getCurrentUser } from '../redux/actions.js'

class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      errors: false,
      fields: {
        username: "",
        password: ""
      }
    }
  }

  login = (username, password) => {
    const URL = 'http://localhost:3000/auth'
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        this.setState({ errors:true })
      } else {
        this.props.currentUser(user.user) // dispatch this function
        localStorage.setItem("tokemon", JSON.stringify(user.jwt));
        this.props.history.push('/dashboard')
      }
    })
  }

  handleChange = (e) => {
    const newFields = {
      ...this.state.fields,
      [e.target.name]: e.target.value
    }
    this.setState({
      fields: newFields
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.login(this.state.fields.username, this.state.fields.password)
  }

  render() {
    return (
      <div>
        <title>Login V2</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <form onSubmit={this.handleSubmit} className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                Welcome!
                </span>
                <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
                </span>
                <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                <input onChange={this.handleChange} className="input100" type="text" name="username" value={this.state.fields.username}/>
                <span className="focus-input100" data-placeholder="Username"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
                </span>
                <input onChange={this.handleChange} className="input100" type="password" name="password" value={this.state.fields.password}/>
                <span className="focus-input100" data-placeholder="Password"></span>
                </div>
                <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn">
                Login
                </button>
                </div>
                </div>
                <div className="text-center p-t-115">
                <span className="txt1">
                Don’t have an account?
                </span>
                <Link to="/signup">Sign Up</Link>
                </div>
                </form>
              </div>
            </div>
          </div>
        <div id="dropDownSelect1"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { currentUser: (user) => dispatch(getCurrentUser(user)) }
}

export default connect(null, mapDispatchToProps)(withRouter(Login))
