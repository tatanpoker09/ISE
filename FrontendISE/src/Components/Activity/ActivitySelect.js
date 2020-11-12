import React from 'react';
import {withRouter} from 'react-router-dom';
import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";
import ActivityView from "./ActivityView";
import CourseListTeacherItem from "../Course/CourseListTeacherItem";
import datos from '../../Static/images/datos.jpg'
import marte from '../../Static/images/exploracion_marte.jpg'
import luna from '../../Static/images/fases_luna.jpg'
import reloj from '../../Static/images/reloj_solar.jpg'
import sistema_solar from '../../Static/images/sistema_solar.jpg'


class ActivitySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseData: props.courseData || {title: "none", teacher: "none"},
            activities: [
                {name: "Reloj solar", added: false, image: reloj},
                {name: "Análisis de datos", added: false, image: datos},
                {name: "Base marciana", added: false, image: marte},
                {name: "Fases de la Luna", added: false, image: luna},
                {name: "Sistema solar", added: false, image: sistema_solar},
            ],
            activity: null,
            addedActivities: 0,
            show: false,
        }
        this.showActivity = this.showActivity.bind(this);
    }

    addActivity = (e) => {
        let container_selected = document.getElementById('activities-select-box');
        let container_idle = document.getElementById('activities-box');
        if (!e.added && this.state.addedActivities < 3) {
            e.added=!e.added;
            console.log('Adding', e.name);
            let activity = document.getElementById(e.name);
            container_selected.appendChild(activity);
            this.state.addedActivities++;
        } else if (e.added){
            e.added=!e.added;
            console.log('Removing', e.name);
            let activity = document.getElementById(e.name);
            container_idle.appendChild(activity);
            this.state.addedActivities--;
        }
        this.forceUpdate();
        console.log(this.state.addedActivities)


    }

    seeStats = (e) => {
        e.preventDefault();
        this.props.history.push('/report');
    }

    showActivity = (e) => {
        this.activity = e;
        this.setState({show : !this.state.show})
    }

    render() {
        return (
          <div id={'activities-full'}>
              {this.state.show?<ActivityView showActivity={this.showActivity}/>:null}
              <div id={"activities-select-title"} className={"text-large"}> Actividades escogidas </div>
              <div id={'activities-select-box'}>
                  <button id={'statistics-button'} className={'normal-button'} onClick={this.seeStats}> Ver estadísticas </button>
              </div>
              <div id={"activities-title"} className={"text-large"}> Escoger actividades </div>
              <div id={'activities-box'}>
                  {this.state.activities.map((activity) =>
                    <ActivityItem addActivity={() => this.addActivity(activity)} showActivity={this.showActivity} activity={activity}/>
                  )}
              </div>
          </div>

        )
    }
}
export default withRouter(ActivitySelect);
