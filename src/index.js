import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import HomePage from './homepage';
import About from './about'
import Demo from './demo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="about" component={About}/>
                <Route path="demo" component={Demo}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
  document.getElementById('root')
);
