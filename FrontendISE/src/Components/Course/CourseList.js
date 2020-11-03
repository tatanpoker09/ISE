import React from "react";
import CourseListItem from "./CourseListItem";

export default class CourseList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {courses : []};
  }

  componentDidMount(){
    //Get courses and update state.
  }

  render() {
    return (
    <div>
        <div id={'course-box'}>
          <CourseListItem courseData={""}/>
          <CourseListItem /> 
          <CourseListItem /> 
          <CourseListItem /> 
          <CourseListItem /> 
          <CourseListItem />  
        </div>
    </div>
    )
  }
}
