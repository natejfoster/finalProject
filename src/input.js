import React from 'react';
import {Row, Input} from 'react-materialize';
import './css/input.css';

var UserInput = React.createClass({
  render() {
    return (
      <div className='userInput'>
        <Input label='Hashtag to compare' id='input'></Input>
        <button onClick={this.props.clickEvent} className='btn waves-effect waves-light green'>Compare</button>
      </div>
    )
  }
})

export default UserInput;
