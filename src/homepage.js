import React from 'react';
import './css/homepage.css';
import {CardPanel, Row, Col} from 'react-materialize';
import $ from 'jquery';
import { Link } from 'react-router';

var HomePage = React.createClass({

	render() {

	    return (
		    <div className='homepage'>
		    	<div id='header-section' className='valign-wrapper'>
					<div id='header-section-wrapper' className='valign'>	
						<h1>noEcho</h1>
						<h2> Break out of the echo chamber by exploring 
						new ideas and diverse worldviews expressed on Twitter.</h2>
						<div id='try-link'>
							<button className='btn waves-light waves-effect green'>
								<Link className="link" to="/escape">Escape the chamber</Link>
							</button>
						</div>
					</div>
		    	</div>
		    	<div id='quote-section'>
		    		<p className='center-align'> "The danger is that
		    		you end up not seeing what people who think differently see
		    		and in fact not even knowing that it exists."
		    		<br/>
		    		<a id='npr-link' target="_blank" href="http://www.npr.org/sections/alltechconsidered/2016/07/24/486941582/the-reason-your-feed-became-an-echo-chamber-and-what-to-do-about-it ">- NPR</a>
		    		</p>
		    	</div>
				<hr/>
		    	<div id='instructions'>
		    		<h2>INSTRUCTIONS</h2>
		    		<p className='instructionsParagraph'>This application implements the Twitter Search API. Search for a hashtag without the pound sign and without spaces in between words. The application will then display tweets representing opposing viewpoints. Tweets on the left side represent positive opinions while tweets on the right represent negative opinions. The default search is #donaldtrump. </p>
		    		<br />
		    		<p className='instructionsParagraph'><em>Warning: Content is not censored.</em></p>
		    	</div>
		    </div>
        )
    }
})

export default HomePage;
