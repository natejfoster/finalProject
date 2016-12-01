import './about.css';

import React from 'react';
import './css/about.css';

var About = React.createClass({
  render() {
    return (
    	<div className='about'>
    		<h1 className='container'>About</h1>
	     	<div className='theProject' className='container'>
	      		<h2>The Project</h2>
	      		<div id="projectDescription"> 
	      		     This project was our final project for our INFO 343 Client-Side 
	      		Web Development class at the University of Washington. We were inspired by 
	      		the recent election to create a project that broke down the social media 
	      		‘echo chamber.’ We hope that our project will enable users to break out of
	      		real and virtual communities that affirm particular narratives. We hope that 
	      		exposure to a wide range of ideas will help users to have more informed conversations 
	      		about these issues and will give users the information they need to more 
	      		critically evaluate their own opinions.
	      		</div>
	      	</div>
	     	<div className='theTeam' className='container'>
	 	        <h2>The Team</h2>
	    	    <div id="card">
	        		<img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="A person"/>
		        	<h3>Sam</h3>
		 	        <p>Sam is a junior at the University of Washington. He is double majoring
		        	in design and informations. He has an interest in......</p>
		    	</div>
		    	<div id="card">
		    		<img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="A person"/>
		        	<h3>Govind</h3>
		        	<p>Govind is a junior at the University of Washington. He is majoring
		        	in informations. He has an interest in......</p>
		    	</div>
		    	<div id="card">
		   			<img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="A person"/>
		        	<h3>Nathan</h3>
		        	<p>Nathan is a junior at the University of Washington. He is majoring
		        	in informations. He has an interest in......</p>
		    	</div>
		    	<div id="card">
		    		<img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="A person"/>
		        	<h3>Madison</h3>
		        	<p>Madison is a junior at the University of Washington. She is double majoring
		        	in philosophy and informations. She has an interest in......</p>
		    	</div>
	      	</div>
	      	<br/>
	    </div>
    )
  }
})

export default About;
