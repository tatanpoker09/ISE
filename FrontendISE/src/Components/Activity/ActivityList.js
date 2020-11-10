import React from 'react';
import ActivityItem from './ActivityItem';

export default class ActivityList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {firstOption: { name: ""},
            secondOption: { name: ""},
            thirdOption: { name: ""},
            fourthOption: { name: ""},
            fifthOption: { name: ""},
            sixthOption: { name: ""},
            septOption: { name: ""}}
    }

    render() {
        return (
            <div className={"activity-box"}>
                <ActivityItem activity={this.state.firstOption}></ActivityItem>
                <ActivityItem activity={this.state.secondOption}></ActivityItem>
                <ActivityItem activity={this.state.thirdOption}></ActivityItem>
                <ActivityItem activity={this.state.fourthOption}></ActivityItem>
                <ActivityItem activity={this.state.sixthOption}></ActivityItem>
                <ActivityItem activity={this.state.septOption}></ActivityItem>
            </div>
        );
    }
}
