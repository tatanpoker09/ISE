import React from 'react';
import {withRouter} from "react-router-dom";

class ActivityItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: props.activity,
            addActivity: props.addActivity
        };
    }

    goToActivity = (e) => {
        e.preventDefault();
        this.props.history.push('/activity');
    }

    render() {
        return (
            <div className={"activity-item"} id={this.state.activity.name}>
                {this.state.activity.name}
                <div>
                    <button onClick={() => this.state.addActivity(this.state.activity)} className={'small-button'}> {this.state.activity.added?'-':'+'} </button>
                    <button className={'small-button'} onClick={this.goToActivity}> Ver </button>
                </div>
            </div>
        );
    }
}

export default withRouter(ActivityItem);
