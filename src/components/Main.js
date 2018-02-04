import React, { Component } from 'react';

export class Main extends Component {
  render() {
    const props = this.props,
          translate = props.translate,
          isHaveTranslate = !!props.wordTranslated,
          haveTranslateContent =
            `Здесь будет расширеный перевод слова "${props.wordTranslated}":`,
          haveNotTranslateContent =
            `Здесь будет перевод`;

    let title, content;

    if(isHaveTranslate) {
      title = haveTranslateContent;
      content = `${props.wordTranslated} - ${translate};`
    } else {
      title = haveNotTranslateContent;
      content = translate;
    }

    return (
      <div className="translated__wrapper">
        <div className="translated__title">
          {title}
        </div>
        <div className="translated__translate">
          {content}
        </div>
      </div>
    );
  }
}
