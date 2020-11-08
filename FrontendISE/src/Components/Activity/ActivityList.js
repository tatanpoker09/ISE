import React from 'react';
import ActivityListItem from './ActivityListItem';

export default class ActivityList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <ActivityListItem></ActivityListItem>
            </div>
        );
    }
}
