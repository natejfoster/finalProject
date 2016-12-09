import React from 'react';
import './css/escape.css';
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
      var name1 = this.state.data1[i].user.screen_name;
      var name2 = this.state.data2[i].user.screen_name;
      formatted.push({text: this.state.data1[i].text, id:'data1', tweet: this.state.data1[i].id.toString(), time: this.state.data1[i].created_at, image: this.state.data1[i].user.profile_image_url, name: name1, src: 'https://twitter.com/' + name1});
      formatted.push({text: this.state.data2[i].text, id:'data2', tweet: this.state.data2[i].id.toString(), time: this.state.data2[i].created_at, image: this.state.data2[i].user.profile_image_url, name: name2, src: 'https://twitter.com/' + name2});
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
    $.get('https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23' + this.state.search + '%20%3A%29%20exclude%3Aretweets%20exclude%3Areplies&lang=en&count=200', function(data1) {
      this.setState({data1:data1.statuses});
    }.bind(this));
    $.get('https://faculty.washington.edu/joelross/proxy/twitter/search/?q=%23' + this.state.search + '%20%3A%28%20exclude%3Aretweets%20exclude%3Areplies&lang=en&count=200', function(data2) {
     this.setState({data2:data2.statuses});
    }.bind(this));
  },

 	render() {
    var current = this.formatData();
    if (current.length != 0) {
      return (
        <div className='escape'>
          <UserInput clickEvent={this.setSearch}></UserInput>
          <div className='escape row container'>
            {
              current.map(function(d, i) {
                return (
                  <div className='col s12 m6 tweetContainer' key={'div' + d.tweet} id={d.id}>
                    <a href={d.src}>
                    <img key={'img' + i} src={d.image} alt={d.tweet + ' user image'} className='userImage' />
                    <h4 key={'h4' + i} className='twitterHandle'>@{d.name}</h4>
                    </a>
                    <p key={'p1' + i} className="tweet">{d.text} <br /><em><span className='timeStamp'>{d.time}</span></em></p>
                  </div>
                )
              })
            }
          </div>
        </div>
  		)
    } else {
      return(
        <div className='escape noResults'>
          <UserInput clickEvent={this.setSearch}></UserInput>
          <p>Your search did not return any results.</p>
        </div>
      )
    }

	}
});

export default Escape;
