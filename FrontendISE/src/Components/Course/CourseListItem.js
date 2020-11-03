import React from "react";

export default class CourseListItem extends React.Component{
    constructor(props) {
      super(props);
      this.state = props.courseData || {title: "none", teacher: "none"};
    }
  
    render() {
      return (
        <a href="">
            <div className={"course-item-box center-text"}>
                <div className={"course-title text-medium"}>{this.state.title}</div>
                <div className={"text-small"}>Profesor: {this.state.teacher}</div>
            </div>
        </a>
      )
    }
  }
  