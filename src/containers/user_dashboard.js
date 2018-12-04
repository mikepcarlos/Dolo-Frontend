import React, { Component } from 'react';
import UserInfo from '../components/user_info.js'
import UserScoreBoard from '../components/user_score_board.js'
import TaskContainer from './task_container.js'
import MyProjects from '../components/my_projects.js'

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">
        <a className="logout button" href="/login" onClick={this.props.logout}>Log Out</a>
        <TaskContainer/>
        <UserInfo />
        <UserScoreBoard/>
        <MyProjects/>
      </div>
    );
  }
}

export default DashBoard;
