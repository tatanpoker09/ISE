import React from 'react';
import ActivityItem from '../Activity/ActivityItem';
import {Button} from "react-bootstrap";

export default class CourseView extends React.Component{
    constructor(props) {
      super(props);
      this.state = {currentCourse: {title: "UWU", teacher: "AWA"},
                    currentActivity : {title: "Fases de la luna"},
                    previousActivities: [] };
    }
    
    componentDidMount(){
        this.setState({ currentCourse: JSON.parse(localStorage.getItem('currentCourse')) });
    }

    getCurrentActivity(){

    }

    getPreviousActivities(){

    }

    enterActivity() {
        console.log("Entrando a la actividad");
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
                      <h1 key={this.state.currentCourse.title}>{this.state.currentActivity.title}</h1>
                      <Button onClick={this.enterActivity}>Ingresar</Button>
                  </div>
              </div>
          </div>
      )
    }
  }
  