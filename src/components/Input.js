import React, { Component } from 'react';
import {WordsSuggestionList} from './WordsSuggestionList';
import { InputMain } from './InputMain';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListFocus: false,
      isInputFocus: false,
    }
  }

  // inputBlurHandler = () => {
  //   this.setState( () => ({
  //     isInputFocus: false,
  //   }));
  // }

  inputFocus = () => {
    // console.log('input focused');
    this.setState( () => ({
      isListFocus: false,
      isInputFocus: true,
    }));
  }

  // inputBlur = () => {
  //   this.setState( () => ({
  //     isInputFocus: false,
  //   }), function(){console.log(111);});
  // }

  listFocus = () => {
    this.setState({
      isInputFocus: false,
      isListFocus: true,
    });
  }

  render() {
    return (
      <div className="input__wrapper">
        <InputMain
          inputChange={this.props.inputChange}
          value={this.props.value}
          requireWord={this.props.requireWord}
          // onInputBlur={this.inputBlurHandler.bind(this)}
          isInputFocus={this.state.isInputFocus}
          // inputBlur={this.inputBlur}
          listFocus={this.listFocus}
        />
        <WordsSuggestionList
          words={this.props.words}
          requireWord={this.props.requireWord}
          isListFocus={this.state.isListFocus}
          inputFocus={this.inputFocus}
        />
      </div>
    );
  }
}

