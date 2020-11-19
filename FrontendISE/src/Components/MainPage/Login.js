import React from "react";
import {withRouter} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import '../../Static/styles/App.scss';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.setAuthenticationData = props.setAuthData;
        this.onValueChange = this.onValueChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    onValueChange(e){
        switch(e.target.id) {
            case 'username':
                this.setState({username: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
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
                            <Form.Control required id="username" type="username" placeholder="Username" onChange={this.onValueChange} value={this.state.username}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className={"text-small text-white"}>Contraseña</Form.Label>
                            <Form.Control required id={"password"} type="password" placeholder="Password" onChange={this.onValueChange} value={this.state.password}/>
                        </Form.Group>
                    </div>
                    <div id="login-button">
                        <Button variant="secondary" type="submit">
                            Ingresar
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default withRouter(Login);