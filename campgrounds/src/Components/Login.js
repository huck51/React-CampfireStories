import React, {Component} from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Navigation from './partials/Navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    // State
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
        <h1>Log In</h1>
        <Row>
          <Col md={12}>
            <FormGroup>
              <ControlLabel>Username:</ControlLabel>
              <FormControl type="text" placeholder="Username">
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password:</ControlLabel>
              <FormControl type="password" placeholder="Password">
              </FormControl>
            </FormGroup>
            <Button>Log In</Button>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Login;
