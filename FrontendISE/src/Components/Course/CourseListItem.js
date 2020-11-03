import React from "react";

export default class CourseListItem extends React.Component{
    constructor(props) {
      super(props);
      this.state = {courseData : {title: "Astroespacial", teacher: "Lucas Muñoz"}};
    }
  
    render() {
      return (
        <div className={"course-item-box center-text"}>
          <div className={"course-title"}><a href="">{this.state.courseData.title}</a></div>
          <div className={"course-teacher"}>{this.state.courseData.teacher}</div>
        </div>
      )
    }
  }
  