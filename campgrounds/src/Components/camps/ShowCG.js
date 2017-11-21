import React, {Component} from 'react';
import {Button, Thumbnail, Row, Col, Image} from 'react-bootstrap';
import Navigation from '../partials/Navigation';

class ShowCG extends Component {
  //Possible Constructor??

  render() {
    return (
      <div>
        <Navigation />
        <Row>
          <Col md={9} id="show">
            <div className="thumbnail">
              <h1>Tatooine</h1>
              <Image
              src="https://images.pexels.com/photos/260593/pexels-photo-260593.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
              responsive="true">
              </Image>
              <div className="caption">
                <h4>PRICE</h4>
              </div>
              <hr />
              <p>Description Wake up! Wake up! We're doomed. Do you think
              they'll melt us down? Don't shoot! Don't shoot! Will this
              never end? Luke, tell Owen that if he gets a translator to be
              sure it speaks Bocce. It looks like we don't have much of a
              choice but I'll remind him. I have no need for a protocol droid.
              Sir -- not in an environment such as this -- that's why I've also
              been programmed for over thirty secondary functions that... What
              I really need is a droid that understands the binary language of
              moisture vaporators. Vaporators! Sir -- My first job was
              programming binary load lifter...very similar to your vaporators.
              You could say... Do you speak Bocce? Of course I can, sir. It's
              like a second language for me...I'm as fluent in... All right
              shut up! I'll take this one.
              </p>
              <div className="lineup" >
                <p className="lineup" >Submitted by USERNAME <br />TIMESTAMP</p>
              </div>
              <Button className="posRight">Edit</Button>
              <Button className="posRight">Delete</Button>
            </div>
            </Col>
            </Row>
            <Row>
            <Col md={9} className="tempRight">
            <div className="commentWell well">
              <Button className="posRight">Add Comment</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShowCG;
