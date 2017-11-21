import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import Navigation from './Components/partials/Navigation';
import CampSites from './Components/camps/CampSites';
import Login from './Components/Login';
import Register from './Components/Register';
import NewCG from './Components/camps/NewCG';
import EditCG from './Components/camps/EditCG';
import ShowCG from './Components/camps/ShowCG';

class App extends Component {
  render() {

    return (
      <div>
        <Navigation />
        <div className="container">
          <Jumbotron>
            <h1>Welcome to Campfire Stories</h1>
            <h3>Use reviews from trusted users to plan the expedition of a lifetime!</h3>
            <Button>Review A Campground</Button>
          </Jumbotron>
          <CampSites />
        </div>
      </div>
    );
    /*
    return (
      <EditCG />
    );
    */
  }
}

export default App;
