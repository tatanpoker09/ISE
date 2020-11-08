import React from "react";
import CourseList from "./CourseList";
import StudentHeader from "../Student/StudentHeader";

export default class CourseListView extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
        <StudentHeader />
        <CourseList />
    </div>
    )
  }
}
