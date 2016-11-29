import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './index.css';
import {Navbar, NavItem} from 'react-materialize';
import HomePage from './homepage';
import About from './about';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Router histroy={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
