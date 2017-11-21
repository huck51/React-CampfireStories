import React, {Component} from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Navigation from '../partials/Navigation';

class NewComment extends Component {
  constructor(props) {
    super(props);
    // State
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>Comment on CAMPGROUND</h1>
          <Row>
            <Col md={8}>
              <FormGroup>
                <ControlLabel>Comment:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Write your Comment here!">
                </FormControl>
              </FormGroup>
              <Button>Submit Comment</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default NewComment;
