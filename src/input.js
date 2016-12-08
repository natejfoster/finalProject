import React from 'react';
import {Row, Input} from 'react-materialize';
import './css/input.css';

var UserInput = React.createClass({
  render() {
    return (
      <div className='userInput'>
        <Input label='Subject to compare'></Input>
        <button className='btn waves-effect waves-light'>Compare</button>
      </div>
    )
  }
})

export default UserInput;
