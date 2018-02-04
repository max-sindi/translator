import React, { Component } from 'react';

export default class HistoryItem extends Component {

  linkClickHandler = () => {
    const props = this.props;

    props.requireWordFromHistory(props.word);
  }

  deleteClickHandler = () => {
    const props = this.props;
    props.deleteFromTranslateHistory(props.placeInArray);
  }

  render() {
    const props = this.props;
    return (
      <li>
        <p
          onClick={this.linkClickHandler}
        >
          {props.word}
        </p>
        <span
          onClick={this.deleteClickHandler}
        >
          х
        </span>
      </li>
    );
  }
}
