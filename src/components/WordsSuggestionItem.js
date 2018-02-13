import React, { Component } from 'react';

export default class WordsSuggestionItem extends Component {
  clickHandler = () => {
    const props = this.props;
    props.requireWord(props.value);
  }

  componentDidUpdate() {
    // console.log('updated');
    // console.log(this.props);

    if(this.props.number === 0 && this.props.listFocus) {
      this.firstInput.focus();
      // console.log(this.props.listFocus);
    }
  }

  keypressHandler = e => {
    // console.log(e.key);
    if(e.key !== 'Enter') return;

    this.props.requireWord(this.props.value);
  }

  keyupHandler__firstItem = (e) => {
    console.log(e.key);
    console.log(e.target);
  }

  render() {
    const { props } = this;
    let listItem;

    if(props.number === 0) {
      listItem =
        <li className="suggestion-list__item-first">
          <input
            className="suggestion-list__radio-input-first"
            type="radio"
            value={props.value}
            onKeyPress={this.keypressHandler}
            ref={ (input) => {this.firstInput = input} }
            onKeyUp={this.keyupHandler__firstItem}
          />
          <div
            className="suggestion-list__text-container"
            onClick={this.clickHandler}
            children={props.item}
          />
        </li>
    } else {
      listItem =
        <li className="suggestion-list__list-item">
          <input
            className="suggestion-list__radio-input"
            type="radio"
            value={props.value}
            onKeyPress={this.keypressHandler}
          />
          <div
            className="suggestion-list__text-container"
            onClick={this.clickHandler}
            children={props.item}
          />
        </li>
    }


    return (
      listItem
    );
  }
}

