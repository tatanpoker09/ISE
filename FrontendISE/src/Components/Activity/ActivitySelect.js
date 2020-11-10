import React from 'react';
import {withRouter} from 'react-router-dom';
import './ActivityItem.css';
import ActivityList from "./ActivityList";
import ActivityItem from "./ActivityItem";

class ActivitySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {courseData : props.courseData || {title: "none", teacher: "none"},
            firstActivity: { name: ""}, secondActivity: {name: ""}, thirdActivity: {name: ""},
            firstOption: { name: ""},
            secondOption: { name: ""},
            thirdOption: { name: ""},
            fourthOption: { name: ""},
            fifthOption: { name: ""},
            sixthOption: { name: ""},
            septOption: { name: ""}};
    }

    updateActivity(e) {
        console.log("hola");
    }

    render() {
        return (
            <div>
                <button>Historial del curso</button>
                <div>
                    <div>
                        <h1>Actividades escogidas </h1>
                    </div>
                    <div className={"activity-box"}>
                        <ActivityItem activity={this.state.firstActivity}></ActivityItem>
                        <ActivityItem activity={this.state.secondActivity}></ActivityItem>
                        <ActivityItem activity={this.state.thirdActivity}></ActivityItem>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Actividades</h1>
                    </div>

                    <div className={"activity-box"}>
                        <ActivityItem onClick={() => this.updateActivity(this.state.firstOption)} activity={this.state.firstOption}></ActivityItem>

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ActivitySelect);