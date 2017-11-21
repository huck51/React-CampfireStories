import React, {Component} from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Navigation from '../partials/Navigation';

class EditCG extends Component {
  constructor(props) {
    super(props);
    // State
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>Need to make a change?</h1>
          <Row>
            <Col md={8}>
              <FormGroup>
                <ControlLabel>Name:</ControlLabel>
                <FormControl type="text" placeholder="Name of Campsite...">
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Image URL:</ControlLabel>
                <FormControl type="URL" placeholder="Ex: https://facebook.com/user/photos/12345">
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Price per night:</ControlLabel>
                <FormControl type="text" placeholder="Ex: 77.00">
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Review:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Write your review here!">
                </FormControl>
              </FormGroup>
              <Button>Resubmit</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default EditCG;
