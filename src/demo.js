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
    var min = Math.min(this.state.data1.length, this.state.data2.length);
    return (
			<div className='demo row container'>
        <div className='col s12 m6' id='data1'>
          {
            this.state.data1.map(function(d, i) {
              if (i < min) {
                return <p key={'p1' + i} className='z-depth-1'>{d.text}</p>
              }
            })
          }
        </div>
        <div className='col s12 m6' id='data2'>
          {
            this.state.data2.map(function(d, i) {
              if (i < min) {
                return <p key={'p2' + i} className='z-depth-1'>{d.text}</p>
              }
            })
          }
        </div>
			</div>
		)
	}
});

export default Demo;
