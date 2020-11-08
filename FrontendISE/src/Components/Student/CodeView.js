import React from "react";
import { Form, Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

class CodeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { code: ""};
        this.onValueChange = this.onValueChange.bind(this);
        this.codeSubmit = this.codeSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({ code: e.target.value });
    }

    codeSubmit(e){
        e.preventDefault();
        this.props.history.push('/activity');
    }

    render() {
        return (
            <div className={"bg"}>
                <div className={"title font-size-title center-text font-color-title"}>
                    Código de actividad
                </div>
                <div align="center" onSubmit={this.codeSubmit}>
                    <Form id="codeForm">
                        <Form.Group>
                            <Form.Control required id="code" type="code" placeholder="Enter code" onChange={this.onValueChange} value={this.state.code} />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div> 
        )
    }
}

export default withRouter(CodeView);