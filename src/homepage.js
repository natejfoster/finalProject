import React from 'react';
import './css/homepage.css';
import {CardPanel, Row, Col} from 'react-materialize';

var HomePage = React.createClass({
  render() {
    return (
	    <div className='homepage'>
	    	<div id='header-section'>
				<h1>Welcome to noEcho</h1>
				<h2>A site with a purpose that is super cool</h2>
	    	</div>
	    	<div id='quote-section'>
	    		<p>"People are so gullable today. 
	    		They might even believe that this is a real quote."
	    		</p>
	    	</div>
	    </div>
    )
  }
})

export default HomePage;
