import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

class CampSites extends Component {
  // constructor and props?

  render() {
    return (
      <Grid>
        <Row className="container">
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>Blood Gulch</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/386140/pexels-photo-386140.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>The Badlands</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>Denali National Parks</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>Blood Gulch</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
        </Row>
        <Row className="container">
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>Blood Gulch</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/386140/pexels-photo-386140.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>The Badlands</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>Denali National Parks</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
          <Col md={3} sm={6} xs={12} className="campMap">
            <Thumbnail
            className=""
            responsive="true"
            src="https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
              <h4>Blood Gulch</h4>
              <Button>More Info</Button>
              <Button className="fav">Favorite</Button>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CampSites;
