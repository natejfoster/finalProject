import React from 'react';
import './css/demo.css';
import $ from 'jquery';
import UserInput from './input';

var baseSearchURL = 'https://twitter.com/search';
var Escape = React.createClass({
	getInitialState() {
		return {data1:[], data2:[], search:'donaldtrump'}
	},

	componentDidMount() {
    this.getSearchData();
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

  setSearch(event) {
      var test = $('#input').val();
      this.setState({search: test}, function() {
        this.getSearchData();
      });
  },

  getSearchData() {
    $.get('https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23' + this.state.search + '%20%3A%29&lang=en&count=200', function(data1) {
      this.setState({data1:data1.statuses});
    }.bind(this));
    $.get('https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23' + this.state.search + '%20%3A%28&lang=en&count=200', function(data2) {
     this.setState({data2:data2.statuses});
    }.bind(this));
    console.log(this.state.data1);
  },

 	render() {

    var current = this.formatData();
    return (
      <div className='demo'>
        <UserInput clickEvent={this.setSearch}></UserInput>
        <div className='demo row container'>
          {
            current.map(function(d, i) {
              return (
                <div className='col s12 m6' id={d.id}>
                  <p key={'p1' + i} className="z-depth-1 tweet">{d.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>

		)
	}
});

export default Escape;