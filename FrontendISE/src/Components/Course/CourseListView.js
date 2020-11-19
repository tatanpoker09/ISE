import React from "react";
import CourseListTeacher from "./CourseListTeacher";
import StudentHeader from "../Student/StudentHeader";

export default class CourseListView extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
        <StudentHeader />
        <CourseListTeacher />
    </div>
    )
  }
}
