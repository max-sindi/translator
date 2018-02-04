import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export class History extends Component {
  render() {
    const props = this.props,
          history = [];


    for(let i = props.history.length; i > 0; i--) {
      const placeInArray = i - 1,
            translateItem = props.history[placeInArray],
            word = translateItem.word,
            listItem = (
              <HistoryItem
                className="history__list-item"
                key={word}
                requireWordFromHistory={props.requireWordFromHistory}
                word={word}
                placeInArray={placeInArray}
                deleteFromTranslateHistory={props.deleteFromTranslateHistory}
            />
          )

      history.push(listItem);
    }

    return (
      <div className="history__wrapper">
        <ul>
          { history }
        </ul>
      </div>
    );
  }
}
