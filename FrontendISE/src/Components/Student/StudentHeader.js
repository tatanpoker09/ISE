import React from "react";

export default class CourseList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: "Elias"};
  }

  render() {
    return (
        <div id="student-header">
            <div>{this.state.username}</div>
            <hr></hr>
        </div>
        
    )
  }
}
