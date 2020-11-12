import React from 'react';
import {withRouter} from 'react-router-dom';
import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";
import CourseListTeacherItem from "../Course/CourseListTeacherItem";
import earth from '../../Static/images/Earth.jpg'


class ActivitySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseData: props.courseData || {title: "none", teacher: "none"},
            activities: [
                {name: "uno", added: false, image: earth},
                {name: "dos", added: false, image: earth},
                {name: "tres", added: false, image: earth},
                {name: "cuatro", added: false, image: earth},
                {name: "cinco", added: false, image: earth},
                {name: "seis", added: false, image: earth},
                {name: "siete", added: false, image: earth},
                {name: "ocho", added: false, image: earth},
                {name: "nueve", added: false, image: earth}
            ],
            addedActivities: 0
        }
    }

    addActivity = (e) => {
        let container_selected = document.getElementById('activities-select-box');
        let container_idle = document.getElementById('activities-box');
        if (!e.added && this.state.addedActivities < 3) {
            e.added=!e.added;
            console.log('Adding', e.name);
            let activity = document.querySelector('#' + e.name);
            activity.id = e.name + "a";
            container_selected.appendChild(activity);
            this.state.addedActivities++;
        } else if (e.added){
            e.added=!e.added;
            console.log('Removing', e.name);
            let activity = document.getElementById(e.name + 'a');
            activity.id = e.name
            container_idle.appendChild(activity);
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
                    <ActivityItem addActivity={() => this.addActivity(activity)} activity={activity}></ActivityItem>
                  )}
              </div>
          </div>

        )
    }
}
export default withRouter(ActivitySelect);
