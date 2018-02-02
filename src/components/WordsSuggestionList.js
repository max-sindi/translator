import React, { Component } from 'react';
import { InputRadio } from './InputRadio';

export default class WordsSuggestionList extends Component {
  render() {
    return (
      <li className="suggestion-list__list-item">
        <InputRadio value={this.props.value} />
        <div className="suggestion-list__text-container">
         {this.props.item}
        </div>

      </li>
    );
  }
}

