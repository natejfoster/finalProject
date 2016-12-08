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
	    		<p className='center-align'>"This is not a real quote, but a real quote from an an 
	    		article should go here"
	    		</p>
	    	</div>
	    	<div id='paragraph-section'>
	    		<p>
	    			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mi pellentesque, 
	    			dignissim nibh sed, accumsan erat. Fusce convallis mauris sit amet mauris 
	    			sollicitudin hendrerit. Cras nec aliquam tellus. Morbi ac malesuada urna, 
	    			at malesuada sem. Sed tortor risus, auctor sed finibus et, feugiat id lectus.
	    		</p>
	    	</div>
	    </div>
    )
  }
})

export default HomePage;
