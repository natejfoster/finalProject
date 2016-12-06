import React from 'react';
import './css/homepage.css';
import {CardPanel, Row, Col} from 'react-materialize';

var HomePage = React.createClass({
  render() {
    return (
      <div className='homepage container'>
        <Row>
          <Col s={12}>
            <CardPanel className="teal lighten-1 white-text flow-text">
              {
                //change this to read in from a text file
              }
              <span>
                Here is a brief overview of the purpose.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </span>
            </CardPanel>
          </Col>
          <Col s={12} m={12} l={6}>
            <div id="placeholder" className='center z-depth-1'>
              <p className='center flow-text'>Put some text about the search</p>
            </div>
          </Col>
          <Col s={12} m={12} l={6}>
            <div id="placeholder" className='center z-depth-1'>
              <p className='center flow-text'>Put a sample search here</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
})

export default HomePage;
