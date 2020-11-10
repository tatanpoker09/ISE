import React from 'react';
import './ActivityItem.css';

export default class ActivityItem extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.activity);
        this.state = {activity: props.activity};
    }

    render() {
        return (
            <div className={"activity-item"}>
                {this.state.activity.name}
            </div>
        );
    }
}
