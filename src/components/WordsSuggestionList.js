import React, { Component } from 'react';
import WordsSuggestionItem from './WordsSuggestionItem'

export class WordsSuggestionList extends Component {

  render() {
    // attention! need refactor
    function parseKey(item) {
      return item.trim().split(' ')[0];
    }

    const {props, words = props.words} = this;

    // attention! need refactor
    const listItems = words.map( (item, index) =>
      <WordsSuggestionItem item={item}
                           number={index}
                           length={words.length}
                           key={ parseKey(item) }
                           value={ parseKey(item) }
                           requireWord={props.requireWord}
                           isListFocus={props.isListFocus}
                           inputFocus={props.inputFocus}
      />
    );

    return (
      <ul
        className="words-suggestion__list"
        children={listItems}
      />
    );
  }
}
