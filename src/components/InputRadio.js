import React, { Component } from 'react';
import $ from 'jquery';

export class InputRadio extends Component {

  clickHandler(e) {

    if(e.key !== 'Enter') {
      return;
    }

  }

  render() {
    return (
      <input type="radio"
             onKeyPress={this.clickHandler.bind(this)}
             className="suggestion-list__radio-input"
             />
    );
  }
}
    $.ajax({
      url: 'http://wooordhunt.ru/'
    })
