import React from 'react';
import ActivityList from './ActivityList';

export default class ActivityMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <ActivityList></ActivityList>
            </div>
        );
    }
}
