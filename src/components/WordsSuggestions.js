import React, { Component } from 'react';
import WordsSuggestionList from './WordsSuggestionList'

export class WordsSuggestions extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    function parseKey(item) {
      return item.trim().split(' ')[0];
    }

    const listItems = this.props.words.map( (item) =>
      <WordsSuggestionList item={item}
                           key={ parseKey(item) }
                           value={ parseKey(item) }
                           />
    );
    // debugger

    return (
      <ul>
        { listItems }
      </ul>
    );
  }
}
