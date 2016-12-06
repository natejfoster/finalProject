import React from 'react';
import './css/demo.css';
import $ from 'jquery';

var baseSearchURL = 'https://twitter.com/search';
var Demo = React.createClass({
	getInitialState() {
		return {data:[]}
	},

	componentDidMount() {
		$.get("https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23hillaryclinton&result_type=popular&lang=en&count=200", function(data) {
			this.setState({data:data.statuses})
			console.log(data);
		}.bind(this));
	},

 	render() {
		return (
			<div className='demo'>
				{
					this.state.data.map(function(d, i) {
						return <p key={'p' + i}>{d.text}</p>
					})
				}
			</div>
		)
	}
});

export default Demo;
