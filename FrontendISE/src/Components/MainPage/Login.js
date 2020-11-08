import React from "react";
import {withRouter} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import '../../Static/styles/App.scss';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", remember: false};
        this.setAuthenticationData = props.setAuthData;
        this.onValueChange = this.onValueChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    onValueChange(e){
        switch(e.target.id) {
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            case 'remember':
                this.setState({remember: e.target.value});
                break;
        }
    }

    loginSubmit(e) {
        e.preventDefault();
        //Login function.
        this.props.history.push('/courses');
    }

    render() {
        return (
            <div className={"login-overlay-size"} id="login">
                <Form onSubmit={this.loginSubmit}>
                    <div className={"login-form"}>
                        <Form.Group>
                            <Form.Label className={"text-small text-white"}>Usuario</Form.Label>
                            <Form.Control required id="email" type="email" placeholder="Enter email" onChange={this.onValueChange} value={this.state.email}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className={"text-small text-white"}>Contraseña</Form.Label>
                            <Form.Control required id={"password"} type="password" placeholder="Password" onChange={this.onValueChange} value={this.state.password}/>
                        </Form.Group>
                    </div>
                    <div id="login-button">
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default withRouter(Login);