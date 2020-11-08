import React from "react";
import {withRouter} from 'react-router-dom';

class CourseListItem extends React.Component{
    constructor(props) {
      super(props);
      this.state = {courseData : props.courseData || {title: "none", teacher: "none"}};
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
        <a href="">
            <div className={"course-item-box center-text"}>
                <div className={"course-title text-medium"}>{this.state.courseData.title}</div>
                <div className={"text-small"}>Profesor: {this.state.courseData.teacher}</div>
            </div>
        </a>
      )
    }
  }

  export default withRouter(CourseListItem);
