import React from "react";
import CourseListTeacherItem from "./CourseListTeacherItem";

export default class CourseListTeacher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {courses : [
                {title: "Astroespacial"},
                {title: "Ecología"},
                {title: "Programación"},
                {title: "Manualidades"},
                {title: "Lider espacial"},
            ]};
    }

    componentDidMount(){
        //Get student courses and update state.
    }

    render() {
        return (
            <div id={'courses-bg'}>
                <div id={"courses-title"} className={"text-large"}> Cursos </div>
                <div id={'courses-box'}>
                    {this.state.courses.map((course) => {
                        return <CourseListTeacherItem courseData={course} />
                    })}
                </div>
            </div>
        )
    }
}
