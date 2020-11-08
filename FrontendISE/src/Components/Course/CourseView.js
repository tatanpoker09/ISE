import React from 'react';
import ActivityListItem from '../Activity/ActivityListItem';

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

    render() {
      return (
        <div className={"course-item-box center-text"}>
            <h1 key={this.state.currentCourse.title}>{this.state.currentCourse.title}</h1>
          <div className={"current-activity"}><a href="">{this.state.currentCourse.title}</a></div>
          <div className={"previous-activities"}>
              {this.state.previousActivities.map((activity, i) => {
                  return <ActivityListItem data={activity} />
              })}
          </div>
        </div>
      )
    }
  }
  