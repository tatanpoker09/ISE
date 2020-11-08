import React from 'react';
import '../../Static/styles/App.scss';
import Login from "./Login";
import {withRouter} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";

export default class LanderView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <div className={"shadow"}></div>
              <div className={"bg"}>
                  <div className={"title font-size-title center-text font-color-title"}>
                      Interactive Space Education
                  </div>
              </div>
              <Login></Login>
            </div>
        );
    }
}
