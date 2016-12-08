
import React from 'react';
import './css/about.css';
import $ from 'jquery';


var About = React.createClass({

	getInitialState(){
		return{samText:'', govindText:'', nathanText:'', madisonText:'', projectDescription: ''}
	},

	componentDidMount(){
		$.get('./text/sam.txt').then(function(data) {
			this.setState({samText:data})
		}.bind(this));

		$.get('./text/govind.txt').then(function(data) {
			this.setState({govindText:data})
		}.bind(this));

		$.get('./text/nathan.txt').then(function(data) {
			this.setState({nathanText:data})
		}.bind(this));

		$.get('./text/madison.txt').then(function(data) {
			this.setState({madisonText:data})
		}.bind(this));

		$.get('./text/about-Project.txt').then(function(data) {
			this.setState({projectDescription:data})
		}.bind(this));
	},

  	render() {
	    return (
	    	<div className='about'>
	    		<h1 className='container'>About Us</h1>
		     	<div className='theProject' className='container'>
		      		<h2>THE PROJECT</h2>
		      		<div id="projectDescription">
		      		     {this.state.projectDescription}
		      		</div>
		      	</div>
		      	<h2>THE TEAM</h2>
		     	<div id='theTeam' className='flex-container'>
		    	    <div className="flex-item">
		        		<img src='./imgs/sam.jpg' alt="Sam"/>
			        	<h3>Sam</h3>
			        	<div id='bio'> {this.state.samText}</div>
			    	</div>
			    	<div className="flex-item">
			    		<img src='./imgs/govind.jpg' alt="Govind"/>
			        	<h3>Govind</h3>
			        	<div id='bio'> {this.state.govindText}</div>

			    	</div>
			    	<div className="flex-item">
			   			<img src='./imgs/nathan.jpg' alt="Nathan"/>
			        	<h3>Nathan</h3>
			        	<div id='bio'>{this.state.nathanText}</div>

			    	</div>
			    	<div className="flex-item">
			    		<img src='./imgs/madison.jpg' alt="Madison"/>
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
