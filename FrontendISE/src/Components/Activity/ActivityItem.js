import React from 'react';
import {withRouter} from "react-router-dom";

class ActivityItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: props.activity,
            addActivity: props.addActivity,
            image: props.activity.image,
        };
        this.showActivity = props.showActivity

    }

    render() {
        return (
            <div className={"activity-item text-small"} id={this.state.activity.name} style={
                {background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + this.state.activity.image + ")",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }
            }>
                {this.state.activity.name}
                <div>
                    <button onClick={() => this.state.addActivity(this.state.activity)} className={'small-button'}> {this.state.activity.added?'-':'+'} </button>
                    <button className={'small-button'} onClick={() => this.showActivity(this.state.activity)}> Ver </button>
                </div>
            </div>
        );
    }
}

export default withRouter(ActivityItem);
