import React from 'react';
import './css/demo.css';
import $ from 'jquery';

var baseSearchURL = 'https://twitter.com/search'
var Demo = React.createClass({
	getInitialState() {
		return {data:[]}
	},

	componentDidMount() {
		$.get("https://faculty.washington.edu/joelross/proxy/twitter/search/?q=hillary%20clinton%20%3A%29&count=200", function(data) {
			this.setState({data:data.statuses})
			console.log(this.state.data);
		}.bind(this));
	},

 	render() {
		return (
			<div className='demo'>
				{
					this.state.data.map(function(d) {
						return <p>{d.text}</p>
					})
				}
			</div>
		)
	}
})

export default Demo;
