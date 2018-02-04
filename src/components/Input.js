import React, { Component } from 'react';
import {WordsSuggestionList} from './WordsSuggestionList';
import { InputMain } from './InputMain';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedListFocus: false,
    }
  }

  inputBlurHandler = () => {
    this.setState({
      suggestedListFocus: true
    });
  }

  render() {
    return (
      <div className="input__wrapper">
        <InputMain
          inputChange={this.props.inputChange}
          value={this.props.value}
          requireWord={this.props.requireWord}
          onInputBlur={this.inputBlurHandler}
        />
        <WordsSuggestionList
          words={this.props.words}
          requireWord={this.props.requireWord}
          needFocus={this.state.suggestedListFocus}
        />
      </div>
    );
  }
}

