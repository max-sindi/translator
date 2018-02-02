import React, { Component } from 'react';
import {WordsSuggestions} from './WordsSuggestions'

export class Input extends Component {
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

  render() {
    return (
      <div className="input__wrapper">
        <input type="text"
               value={this.state.inputValue}
               onChange={this.changeHandler } />
        <WordsSuggestions words={this.props.words}/>
      </div>
    );
  }
}

