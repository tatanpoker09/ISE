import React from 'react';

export default class ActivityListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <div className={"bg"}>
                    <div className={"title font-size-title center-text font-color-title"}>
                        Interactive Space Education
                    </div>
                </div>
            </div>
        );
    }
}
