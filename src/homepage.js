import React from 'react';
import './css/homepage.css';
import {CardPanel, Row, Col} from 'react-materialize';
import $ from 'jquery';
import { Link } from 'react-router';

var HomePage = React.createClass({

	render() {

	    return (
		    <div className='homepage'>
		    	<div id='header-section'>
						<h1>noEcho</h1>
						<h2>Break Out of the Echo Chamber. Here at noEcho we
						want to help you explore new ideas through the diverse
						worldviews held on Twitter.</h2>
						<div id='try-link'>
							<button className='btn waves-light waves-effect'>
								<Link className="link" to="/escape">Escape the chamber</Link>
							</button>
						</div>
						<h3>We implemented the Twitter Search API so you can see the opposing views regarding any hashtag.</h3>
		    	</div>
		    	<div id='quote-section'>
		    		<p className='center-align'> "The danger is that
		    		you end up not seeing what people who think differently see
		    		and in fact not even knowing that it exists."
		    		<a href="http://www.npr.org/sections/alltechconsidered/2016/07/24/486941582/the-reason-your-feed-became-an-echo-chamber-and-what-to-do-about-it ">
		    		(NPR) </a> </p>
		    	</div>
		    </div>
        )
    }
})

export default HomePage;
