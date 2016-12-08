import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import '../node_modules/font-awesome/css/font-awesome.css'
import {NavItem, Navbar} from 'react-materialize';

// Needed for onTouchTap (to avoid warning from material-ui)
// See: https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var App = React.createClass({




       





  render() {
    return (
      <div className="app">
        <div>
          <Navbar brand='' right>
            <Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
            <NavItem><Link className="link" activeClassName='active' to="/demo">Demo</Link></NavItem>
            <NavItem><Link className="link" activeClassName='active' to="/about">About</Link></NavItem>
          </Navbar>
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default App;
