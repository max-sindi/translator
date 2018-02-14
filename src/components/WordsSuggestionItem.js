import React, { Component } from 'react';

export default class WordsSuggestionItem extends Component {
  clickHandler = () => {
    const props = this.props;
    props.requireWord(props.value);
  }

  componentDidUpdate() {
    console.log(this.props.isListFocus);
    // console.log(this.props);
// debugger
    if(this.props.number === 0 && this.props.isListFocus) {
      this.input.focus();
      // console.log(this.props.isListFocus);
    }
  }

  keypressHandler = e => {
    if(e.key !== 'Enter') return;

    this.props.requireWord(this.props.value);
  }

  inputFocus = () => {
    this.props.inputFocus();
  }

  keyDownHandler = (e) => {
    const {number, length} = this.props;

    // checking is there have sense in running main part of function
    if(number !== 0 && number !== (length - 1)) {
      return;
    }

    const key = e.key,
          isTopEdge = (number === 0 && key === "ArrowUp"),
          isBottomEdge = (number === (length - 1) && key === "ArrowDown");

    if(isTopEdge) {
      e.preventDefault();
      this.inputFocus();
    } else if(isBottomEdge) {
      e.preventDefault();
    }
  }

  render() {
    const { props } = this;

    return (
        <li className="suggestion-list__item">
          <input
            className="suggestion-list__radio-input"
            type="radio"
            value={props.value}
            onKeyDown={this.keyDownHandler}
            onKeyPress={this.keypressHandler}
            ref={ (input) => {this.input = input} }
          />
          <div
            className="suggestion-list__text-container"
            onClick={this.clickHandler}
            children={props.item}
          />
        </li>
    );
  }
}

