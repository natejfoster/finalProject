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
		}.bind(this));

		$.get("https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23donaldtrump&result_type=popular&lang=en&count=200", function(data2) {
			this.setState({data2:data2.statuses});
		}.bind(this));
	},

  formatData() {
    var formatted = [];
    var min = Math.min(this.state.data1.length, this.state.data2.length);
    for (var i = 0; i < min; i++) {
      formatted.push({text: this.state.data1[i].text, id:'data1'});
      formatted.push({text: this.state.data2[i].text, id:'data2'});
    }
    return formatted;
  },

 	render() {
    var min = Math.min(this.state.data1.length, this.state.data2.length);
    var current = this.formatData();
    console.log(current);
    return (
			<div className='demo row container'>
        {
          current.map(function(d, i) {
            return (
              <div className='col s12 m6' id={d.id}>
                <p key={'p1' + i} className="z-depth-1">{d.text}</p>
              </div>
            )
          })
        }
			</div>
		)
	}
});

export default Demo;
