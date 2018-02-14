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

  componentWillUpdate() {
    // debugger;

  }

  componentDidUpdate() {
    if(this.props.isInputFocus) {
      console.log(11);
      setTimeout( () => {
        this.input.focus();
      }, 1);
    }
  }

  // set focus to list
  keyDownHandler = (e) => {
    const key = e.key;

    if(key !== 'ArrowDown') {
      return;
    }
    // console.log('input keyed');
    this.props.listFocus();
  }

  // blurHandler = () => {
  //   this.props.inputBlur();
  // }

  render() {
    return (
      <input
         type="text"
         id="aaa"
         autoFocus
         value={this.state.inputValue}
         onKeyPress={this.keypressHandler}
         onKeyDown={this.keyDownHandler}
         onChange={this.changeHandler}
         onBlur={this.blurHandler}
         ref={ (input) => {this.input = input} }
      />
    );
  }
}
