import React, { Component } from 'react';
import UserInfo from '../components/user_info.js'

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">
        <a className="logout button" href="/login" onClick={this.props.logout}>Log Out</a>
        <UserInfo />
      </div>
    );
  }
}

export default DashBoard;
