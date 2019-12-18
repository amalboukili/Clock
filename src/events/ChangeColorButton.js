import React, { Component } from 'react';

export class ChangeColorButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Change the color</button>
      </div>
    );
  }
}

export default ChangeColorButton;
