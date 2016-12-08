import React from 'react';

var Input = React.createClass({
  render() {
    return (
      <div id='userInput'>
        <input placeholder="subject to compare"/>
        <button className='btn waves-effect waves-light'>Compare</button>
      </div>
    )
  }
})

export default Input;
