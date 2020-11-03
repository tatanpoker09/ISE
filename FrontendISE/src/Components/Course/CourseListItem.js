import React from "react";
import {withRouter} from 'react-router-dom';

class CourseListItem extends React.Component{
    constructor(props) {
      super(props);
      this.state = {courseData : {title: "Astroespacial", teacher: "Lucas Muñoz"}};
      this.goToCourse = this.goToCourse.bind(this);
    }
    
    goToCourse(){
      localStorage.setItem('currentCourse', JSON.stringify(this.state.courseData))
      /*changeCourse(this.state.courseData).then(res =>{
        console.log("Done");
      });*/
      this.props.history.push('/course');
    }

    render() {
      return (
        <div className={"course-item-box center-text"}>
          <div className={"course-title"}><a onClick={this.goToCourse}>{this.state.courseData.title}</a></div>
          <div className={"course-teacher"}>{this.state.courseData.teacher}</div>
        </div>
      )
    }
  }

  export default withRouter(CourseListItem);
