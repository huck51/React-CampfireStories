import React, {Component} from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Navigation from './partials/Navigation';

class Register extends Component {
  constructor(props) {
    super(props);
    // State
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
        <h1>Sign Up!</h1>
        <Row>
          <Col md={12}>
            <FormGroup>
              <ControlLabel>Username:</ControlLabel>
              <FormControl type="text" placeholder="a-z, A-Z, 0-9">
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password:</ControlLabel>
              <FormControl type="password" placeholder="Must be at least 8 characters">
              </FormControl>
            </FormGroup>
            <Button>Sign Up</Button>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Register;
