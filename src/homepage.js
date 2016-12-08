import React from 'react';
import './css/homepage.css';
import {CardPanel, Row, Col} from 'react-materialize';
import $ from 'jquery';

var HomePage = React.createClass({

	render() {
	    return (
		    <div className='homepage'>
		    	<div id='header-section'>
					<h1>Break Out of the Echo Chamber</h1>
					<h2>Narratives. How we undestand and interact with the world.
					Here at noEcho we want to help you break out of narratives
					by finding diverse worldviews held on Twitter.
					We hope that these range of worldviews will help you to
					have more informed conversations about these issues.</h2>
		    	</div>
		    	<div id='quote-section'>
		    		<p className='center-align'> add some quote from an article </p>
		    	</div>

		    	<div id='paragraph-section'> 
		    		<p>
			    		The purpose of our project is to expose our users to a variety of opinions 
			    		so they have the information they need to become more aware of their biases 
			    		and the diversity of the people around them. Many social media sites use the 
			    		preferences and biases of a user to determine what information to display to 
			    		that user. This limited exposure to ideas greatly skews perceptions 
			    		of the world and their place in it. Our aim is to break down this social media 
			    		‘echo chamber.’ We want to create an application that lets people explicitly 
			    		see their own opinions and how they compare to the opinions held by other people 
			    		on Twitter. This increased awareness will hopefully cause users to evaluate their 
			    		own opinions more critically and understand other people more deeply. 
		    		</p>

					<p>
						Add some information about articles and links to those articles...
					</p>
					
					<p>
						Our project will enable users to break out of real and virtual communities that 
						affirm particular narratives. The application will not filter information to the 
						preferences of the users, but rather will give the user an accurate reflection 
						of the diverse opinions held on Twitter. We hope that exposure to a wide range 
						of ideas will help users to have more informed conversations about these issues 
						and will give users the information they need to more critically evaluate their 
						own opinions. As a result, we hope that users will have a deeper understanding 
						of the people around them and an increased awareness of the diversity of the world.
					</p>
				</div>
		    </div>
        )
    }
})

export default HomePage;
