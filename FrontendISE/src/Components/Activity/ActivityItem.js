import React from 'react';

export default class ActivityItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: props.activity,
            addActivity: props.addActivity,
            image: props.activity.image,
        };
    }
    render() {
        return (
            <div className={"activity-item"} id={this.state.activity.name} style={{backgroundImage: "url(" + this.state.activity.image + ")"}}>
                {this.state.activity.name}
                <div>
                    <button onClick={() => this.state.addActivity(this.state.activity)} className={'small-button'}> {this.state.activity.added?'-':'+'} </button>
                    <button className={'small-button'}> ver </button>
                </div>
            </div>
        );
    }
}
