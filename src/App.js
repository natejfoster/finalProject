import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Link } from 'react-router';
import {Navbar, NavItem} from 'react-materialize';
import '../node_modules/font-awesome/css/font-awesome.css'

// Needed for onTouchTap (to avoid warning from material-ui)
// See: https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var App = React.createClass({
  render() {
    return (
      <div className="app">
        <div className="nav">
            <Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
            <Link className="link" activeClassName='active' to="/about">About</Link>
            <Link className="link" activeClassName='active' to="/demo">Demo</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default App;
