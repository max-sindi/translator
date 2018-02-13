import React, { Component } from 'react';
import WordsSuggestionItem from './WordsSuggestionItem'

export class WordsSuggestionList extends Component {

  render() {
    // attention! need refactor
    function parseKey(item) {
      return item.trim().split(' ')[0];
    }

    // attention! need refactor
    const listItems = this.props.words.map( (item, index) =>
      <WordsSuggestionItem item={item}
                           key={ parseKey(item) }
                           value={ parseKey(item) }
                           requireWord={this.props.requireWord}
                           number={index}
                           listFocus={this.props.listFocus}
      />
    );

    return (
      <ul
        className="words-suggestion__list"
      >
        { listItems }
      </ul>
    );
  }
}
