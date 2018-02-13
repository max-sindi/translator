import React, { Component } from 'react';
import {WordsSuggestionList} from './WordsSuggestionList';
import { InputMain } from './InputMain';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFocus: false,
      inputFocus: false,
    }
  }

  inputBlurHandler = () => {
    this.setState({
      listFocus: true,
      inputFocus: false,
    });
  }

  render() {
    return (
      <div className="input__wrapper">
        <InputMain
          inputChange={this.props.inputChange}
          value={this.props.value}
          requireWord={this.props.requireWord}
          onInputBlur={this.inputBlurHandler.bind(this)}
        />
        <WordsSuggestionList
          words={this.props.words}
          requireWord={this.props.requireWord}
          listFocus={this.state.listFocus}
        />
      </div>
    );
  }
}

