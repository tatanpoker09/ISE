import React from 'react';
import '../../Static/styles/App.scss';
import Login from "./Login";
import Logo from '../../Static/images/logo_ISE_white.svg';
import {withRouter} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";

export default class LanderView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"lander-container"}>
                    <img src={Logo} alt={"ISE"} />
                    <Login></Login>
                </div>
            </div>
        );
    }
}
