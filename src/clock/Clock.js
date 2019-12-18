import React, { Component } from 'react';

let time = new Date().toLocaleString();
export class Clock extends Component {
  render() {
    return (
      <div>
        <p>the time is {time}</p>
      </div>
    );
  }
}

export default Clock;
