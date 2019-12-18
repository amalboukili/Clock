import React, { Component } from 'react';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      foo: 'Click me',
    };
  }
  handleClick() {
    this.setState({
      foo: 'bar',
    });
    console.log('Click');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.foo}</button>
      </div>
    );
  }
}

export default MyComponent;
