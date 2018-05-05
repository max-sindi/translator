import React, { Component } from 'react';
import './App.css';
import { History } from './components/History';
import { Main } from './components/Main';
import { Input } from './components/Input';

import wordsSorted from './components/words-store';
import config from './config'
import axios from 'axios';

axios.get('/translate')
  .then((data) => {
    console.log(data);
  })


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateHistory: [],
      suggestedWordsArray: [],
      wordInInput: '',
      wordTranslated: '',
      firstLetter: '',
      translate: '',
      trimmedValue: '',
    }
  }

  // attention! need think about move major part of this in Input component
  inputChangeHandler = (value) => {
    const trimmedValue = extractEnglishLetters(value);
    let suggestedWordsArray = [],
        firstLetter;

    if( !trimmedValue ) {
      this.setState({
        firstLetter: '',
        suggestedWordsArray,
      });

      return;
    }

    firstLetter = trimmedValue[0];

    fillSuggestedArray();

    this.setState({
      suggestedWordsArray,
      firstLetter,
      trimmedValue
    })

    function fillSuggestedArray() {
      const letterObject = wordsSorted[firstLetter],
            // search match only in start of potential word
            regSearch = new RegExp('\\b' + trimmedValue),
            maxSuggestedResults = config.maxSuggestedResults,
            arrayOfAllResults = [];

      fillArrayWidthAllResults();

      if(arrayOfAllResults.length > maxSuggestedResults) {
        fillArrayWithRundomResults();
      } else {
        suggestedWordsArray = arrayOfAllResults;
      }

      /*
        fillFullArray function runs through the letterObject and detect which of
        existing words are matching to the required value.
        arrayOfAllResults will be filling with matched values;
      */
      function fillArrayWidthAllResults() {
        const arr = arrayOfAllResults;

        for(let key in letterObject) {

          if( key.search(regSearch) !== -1) {
            const str = key + ' - ' + letterObject[key];
            arr.push( str );
          }

        }
      }

      /*
        fillWithRundomMatchedValues function get the $maxSuggestedResults random
        results and put them into $suggestedWordsArray.
      */
      function fillArrayWithRundomResults() {
        const workArray = suggestedWordsArray,
              resultsArray = arrayOfAllResults,
              fullLenth = resultsArray.length,
              max = maxSuggestedResults,
              resultsNumbers = {};

        for(let i = 0; i < max; i++) {
          const random = Math.floor( (Math.random() * (fullLenth-1) ) + 1);

          if(i === 0) {
            workArray.push( resultsArray[0] );
            continue;
          }

          if( !resultsNumbers[random] ) {
            workArray.push( resultsArray[random] );
            resultsNumbers[random] = true;
          } else {
            i--;
          }

        }
      }
    }

    function extractEnglishLetters(val) {
      let newValue = val.toLowerCase().match(/[a-z]/g);

      if( newValue ) {
        return newValue.join('');
      } else {
        return '';
      }
    }
  }

  requireWord = (word) => {
    // if nothing was typed
    if(!word) {
      return;
    }

    const { firstLetter } = this.state;
    let translate;

    if(wordsSorted[firstLetter]) {
      translate = wordsSorted[firstLetter][word];

      // if translate was founded -> put it in translate history
      if(translate) {
       addWordToHistory(this, word, translate);
      }

    } else {
      translate = 'Нет совпадений';
    }

    this.setState({
      wordTranslated: word,
      translate,
    });

    function addWordToHistory(that, word, translate) {
      const newTranslateHistory = that.state.translateHistory.concat();

      /*
       if any word repeats, the oldest one removes, that's why $translateHistory
       consist of only unique words
      */
      newTranslateHistory.forEach( (item, index, arr) => {
        if( item.word === word ) {
          arr.splice(index, 1);
        }
      })

      newTranslateHistory.push({word, translate});
      that.setState({
        translateHistory: newTranslateHistory
      })
    }
  }

  requireWordFromHistory = (word) => {
    const firstLetter = word[0],
          translate = wordsSorted[firstLetter][word];

    this.setState({
      wordTranslated: word,
      translate,
    })
  }

  deleteFromTranslateHistory = (placeInArray) => {
    const newTranslateHistory = this.state.translateHistory.concat();
    // delete item
    newTranslateHistory.splice(placeInArray, 1);

    this.setState({
      translateHistory: newTranslateHistory
    });
  }

  render() {
    const state = this.state,
          { firstLetter, wordTranslated } = state;

    let translate;

    // if input is clear, it views previous result or says to type something
    if( firstLetter.search(/\w/) === -1 ) {

      if(wordTranslated) {
        translate = defineTranslation();
      } else {
        translate = 'Вы ничего не написали';
      }

    } else {
      translate = defineTranslation();
    }

    function defineTranslation() {
      let translate = state.translate;

      if(state.translate === '') {
        translate = 'Выберите слово';
      } else if(!translate) {
        translate = 'Перевод не найден';
      }

      return translate;
    }

    return (
      <div className="page-wrapper">
        <History
          history={ this.state.translateHistory }
          requireWordFromHistory={this.requireWordFromHistory}
          deleteFromTranslateHistory={this.deleteFromTranslateHistory}
        />
        <Input
          inputChange={ this.inputChangeHandler }
          words={this.state.suggestedWordsArray}
          requireWord={this.requireWord}
        />
        <Main
          wordTranslated={wordTranslated}
          translate={translate}
        />
      </div>
    )
  }
}


export default App;
