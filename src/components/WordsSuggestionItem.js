import React, { Component } from 'react';

export default class WordsSuggestionItem extends Component {
  clickHandler = () => {
    const props = this.props;
    props.requireWord(props.value);
  }

  componentDidUpdate() {
    console.log('updated');
  }

  keypressHandler = e => {
    if(e.key !== 'Enter') {
      return;
    }

    this.props.requireWord(this.props.value);
  }
        // ref={(input) => {this.list = input} }
  render() {
    const { props } = this;
    return (
      <li className="suggestion-list__list-item">
        <input
          className="suggestion-list__radio-input"
          type="radio"
          value={props.value}
          onKeyPress={this.keypressHandler}
          autoFocus={this.props.number === 0 && this.props.needFocus}
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

