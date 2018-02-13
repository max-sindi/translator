import React, { Component } from 'react';

export class InputMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  changeHandler = (e) => {
    const value = e.target.value;

    this.setState({
      inputValue: value
    });

    this.props.inputChange(value);
  }

  keypressHandler = (e) => {
    if(e.key !== 'Enter') {
      return;
    }

    this.props.requireWord(this.state.inputValue);
  }

  // set focus to list
  keyupHandler = (e) => {
    if(e.key !== 'ArrowDown') {
      return;
    }

    this.props.onInputBlur();
    console.log("arrow down");
  }

  render() {
    return (
      <input
         type="text"
         autoFocus
         value={this.state.inputValue}
         onKeyPress={this.keypressHandler}
         onKeyUp={this.keyupHandler}
         onChange={this.changeHandler}
      />
    );
  }
}
