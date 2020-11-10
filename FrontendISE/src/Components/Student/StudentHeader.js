import React from "react";

export default class CourseList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: "Elias"};
  }

  render() {
    return (
        <div className={"custom-header"}>
            <a><div className={"text-small"}>{this.state.username}</div></a>
        </div>
        
    )
  }
}
