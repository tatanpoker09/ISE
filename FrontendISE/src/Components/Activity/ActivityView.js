import React from 'react';
import ActivityList from './ActivityList';
import {withRouter} from 'react-router-dom';

class ActivityView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {courseData: {title: "Potato"}};
        //ActivityList
    }

    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('currentCourse'));
        this.setState({courseData: data});
    }

    render() {
        return (
            <div>
                <h1 key={this.state.courseData.title}>{this.state.courseData.title}</h1> 
            </div>
        );
    }
}

export default withRouter(ActivityView);