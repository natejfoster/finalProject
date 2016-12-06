import React from 'react';
import './css/demo.css';
import $ from 'jquery';

var baseSearchURL = 'https://twitter.com/search';
var Demo = React.createClass({
	getInitialState() {
		return {data1:[], data2:[]}
	},

	componentDidMount() {
		$.get("https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23hillaryclinton&result_type=popular&lang=en&count=200", function(data1) {
			this.setState({data1:data1.statuses});
			console.log(data1);
		}.bind(this));

		$.get("https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23donaldtrump&result_type=popular&lang=en&count=200", function(data2) {
			this.setState({data2:data2.statuses});
			console.log(data2);
		}.bind(this));
	},

 	render() {
		return (
			<div className='demo'>
				{
					this.state.data1.map(function(d, i) {
						return <p key={'p' + i}>{d.text}</p>
					})
				}
			</div>
		)
	}
});

export default Demo;
