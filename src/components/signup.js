import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";


class Signup extends Component {

  constructor(props){
    super(props)

    this.state = {
      fields: {
        email: "",
        username: "",
        pass: "",
        passCon: ""
      }
    }
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

  signup = (email, username, password, pCon) => {
    const URL = 'http://localhost:3000/users'
    if (password === pCon){
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
            email: email,
            displayname: "",
            img: "",
            bio: "",
            score: null
          }
        })
      })
      .then(res => res.json())
      .then(this.props.history.push('/login'))
    } else {
      alert("not same password bro")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.signup(this.state.fields.email, this.state.fields.username, this.state.fields.pass, this.state.fields.passCon)
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
      						Join us hehehe
      					</span>
      					<span className="login100-form-title p-b-48">
      						<i className="zmdi zmdi-font"></i>
      					</span>
      					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
      						<input onChange={this.handleChange} className="input100" type="text" name="email" value={this.state.fields.email}/>
      						<span className="focus-input100" data-placeholder="Email"></span>
      					</div>
                <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
      						<input onChange={this.handleChange} className="input100" type="text" name="username" value={this.state.fields.username}/>
      						<span className="focus-input100" data-placeholder="Username"></span>
      					</div>
      					<div className="wrap-input100 validate-input" data-validate="Enter password">
      						<span className="btn-show-pass">
      							<i className="zmdi zmdi-eye"></i>
      						</span>
      						<input onChange={this.handleChange} className="input100" type="password" name="pass" value={this.state.fields.pass}/>
      						<span className="focus-input100" data-placeholder="Password"></span>
      					</div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <span className="btn-show-pass">
                    <i className="zmdi zmdi-eye"></i>
                  </span>
                  <input onChange={this.handleChange} className="input100" type="password" name="passCon" value={this.state.fields.passCon}/>
                  <span className="focus-input100" data-placeholder="Password Confirmation"></span>
                </div>
      					<div className="container-login100-form-btn">
      						<div className="wrap-login100-form-btn">
      							<div className="login100-form-bgbtn"></div>
      							<button className="login100-form-btn">
      								Signup!
      							</button>
      						</div>
      					</div>
      					<div className="text-center p-t-115">
      						<span className="txt1">
      							Already have an account?
      						</span>
      						<Link to="/login">Log In</Link>
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

export default withRouter(Signup)
