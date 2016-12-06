
import React from 'react';
import './css/about.css';
import $ from 'jquery';


var About = React.createClass({
	
	getInitialState(){
		return{samText:'', govindText:'', nathanText:'', madisonText:''}
	},

	componentDidMount(){
		$.get('./text/sam.txt').then(function(data) {
			console.log(data)
			var samText = data;
			console.log(samText);
			this.setState({samText:samText})
		}.bind(this));

		$.get('./text/govind.txt').then(function(data) {
			console.log(data)
			var govindText = data;
			console.log(govindText);
			this.setState({govindText:govindText})
		}.bind(this));

		$.get('./text/nathan.txt').then(function(data) {
			console.log(data)
			var nathanText = data;
			console.log(nathanText);
			this.setState({nathanText:nathanText})
		}.bind(this));

		$.get('./text/madison.txt').then(function(data) {
			console.log(data)
			var madisonText = data;
			console.log(madisonText);
			this.setState({madisonText:madisonText})
		}.bind(this));
	},

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
		     	<div id='theTeam' className='container'>
		 	        <h2>The Team</h2>
		    	    <div className="card">
		        		<img src='./imgs/sam.jpeg' alt="Sam"/>
			        	<h3>Sam</h3>
			        	<div id='bio'> {this.state.samText}</div>
			    	</div>
			    	<div className="card">
			    		<img src='./imgs/govind.jpeg' alt="Govind"/>
			        	<h3>Govind</h3>
			        	<div id='bio'> {this.state.govindText}</div>
			        	
			    	</div>
			    	<div className="card">
			   			<img src='./imgs/nathan.jpeg' alt="Nathan"/>
			        	<h3>Nathan</h3>
			        	<div id='bio'>{this.state.nathanText}</div>
			        	
			    	</div>
			    	<div className="card">
			    		<img src='./imgs/madison.jpeg' alt="Madison"/>
			        	<h3>Madison</h3>
			        	<div id='bio'>{this.state.madisonText}</div>
			    	</div>
		      	</div>
		      	<br/>
		    </div>
    )
  }
})

export default About;
