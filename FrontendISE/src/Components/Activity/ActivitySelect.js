import React from 'react';
import {withRouter} from 'react-router-dom';
import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";
import CourseListTeacherItem from "../Course/CourseListTeacherItem";

class ActivitySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {courseData : props.courseData || {title: "none", teacher: "none"},
            activities: [
                { name: "uno", added: false},
                { name: "dos", added: false},
                { name: "tres", added: false},
                { name: "cuatro", added: false},
                { name: "cinco", added: false},
                { name: "seis", added: false},
                { name: "siete", added: false},
                { name: "ocho", added: false},
                { name: "nueve", added: false}
            ],
            addedActivities: 0
        }
    }

    addActivity = (e) => {
        let container = document.getElementById('activities-select-box');
        if (!e.added && this.state.addedActivities < 3) {
            e.added=!e.added;
            console.log('Adding', e.name);
            let activity = document.querySelector('#' + e.name);
            let activity_clone = activity.cloneNode(true);
            activity_clone.id = e.name + "a";
            container.appendChild(activity_clone);
            this.state.addedActivities++;
        } else if (e.added){
            e.added=!e.added;
            console.log('Removing', e.name);
            let activity = document.getElementById(e.name + 'a');
            container.removeChild(activity);
            this.state.addedActivities--;
        }
        console.log(this.state.addedActivities)


    }

    seeStats = (e) => {
        e.preventDefault();
        this.props.history.push('/report');
    }

    render() {
        return (
          <div>
              <div id={"activities-select-title"} className={"text-large"}> Actividades escogidas </div>
              <div id={'activities-select-box'}>
                  <button id={'statistics-button'} className={'normal-button'} onClick={this.seeStats}> Ver estadísticas </button>
              </div>
              <div id={"activities-title"} className={"text-large"}> Escoger actividades </div>
              <div id={'activities-box'}>
                  {this.state.activities.map((activity) =>
                    <ActivityItem addActivity={this.addActivity} activity={activity}></ActivityItem>
                  )}
              </div>
          </div>

        )
    }
}
export default withRouter(ActivitySelect);