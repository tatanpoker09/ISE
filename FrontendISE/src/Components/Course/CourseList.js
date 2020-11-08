import React from "react";
import CourseListItem from "./CourseListItem";

export default class CourseList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {courses : [
      {title: "Astroespacial", teacher: "Lucas Muñoz"},
      {title: "Ecología", teacher: "Elias Sabja"},
      {title: "Programación", teacher: "Tatan Poker"},
      {title: "Manualidades", teacher: "Diego bustamante"},
      {title: "Lider espacial", teacher: "Cristobal Sali"},
    ]};
  }

  componentDidMount(){
    //Get student courses and update state.
  }

  render() {
    return (
    <div>
      <div id={"courses-title"} className={"text-large"}> Cursos </div>
      <div id={'courses-box'}>
        {this.state.courses.map((course) => {
          return <CourseListItem courseData={course} />
        })}
      </div>
    </div>
    )
  }
}
