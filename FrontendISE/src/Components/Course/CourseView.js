import React from 'react';
import {Button} from "react-bootstrap";

export default class CourseView extends React.Component{
    constructor(props) {
      super(props);
      this.state = {currentCourse: {title: "UWU", teacher: "AWA"},
                    currentActivity : {title: "Astroespacial", teacher: "Lucas Muñoz"}, 
                    previousActivities: [] };
    }
    
    componentDidMount(){
        this.setState({ currentCourse: JSON.parse(localStorage.getItem('currentCourse')) });
    }

    getCurrentActivity(){

    }

    getPreviousActivities(){

    }

    enterActivity(){
      console.log(5);
    }

    render() {
      return (
         <div>
        <div class="custom-header">
          <a><div className={"text-medium"}>{this.state.currentCourse.title}</div></a>
          <a><div className={"text-small"}>{this.state.currentCourse.teacher}</div></a>
            
        </div>
        <div className={"activity-item-box center-text"}>
          <div className={"activity-item"}>
            Actividad actual
            <h1 key={this.state.currentCourse.title}>{this.state.currentCourse.title}</h1>
            <Button onClick={enterActivity}>Ingresar</Button>
          </div> 
          <div className={"activity-item"}>
            Actividad
            <h1 key={this.state.currentCourse.title}>{this.state.currentCourse.title}</h1>
          </div>
          <div className={"current-activity"}></div>
          <div className={"previous-activities"}>
          
          </div>
        </div>
        </div>
      )
    }
  }
  