import React, { Component } from 'react';
import './App.css';
import { History } from './components/History';
import { Main } from './components/Main';
import { Input } from './components/Input';

import wordsSorted from './components/words-store';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsHistiry: [],
      suggestedWordsArray: [],
      wordInInput: '',
      wordTranslated: ''
    }
  }

  inputChangeHandler = (value) => {
    const firstLetter = value[0],
          letterObject = wordsSorted[firstLetter],
          regSearch = new RegExp(value, 'i'),
          arrayOfAllResults = [],
          maxSuggestedResults = 10;

    let suggestedWordsArray = [];

    fillArrayWidthAllResults();

    if(arrayOfAllResults.length > maxSuggestedResults) {
      fillWithRundomMatchedValues();
    } else {
      suggestedWordsArray = arrayOfAllResults;
    }


    this.setState({
      suggestedWordsArray
    })

    /*
      fillFullArray function runs through the letterObject and detect which of
      existing words are matching to the value.
      arrayOfAllResults will be filling with matched values;
    */
    function fillArrayWidthAllResults() {
      for(let key in letterObject) {

        if( key.search(regSearch) !== -1) {
          const str = key + ' - ' + letterObject[key];
          arrayOfAllResults.push( str );
        }

      }
    }

    /*
      fillWithRundomMatchedValues function get the $maxSuggestedResults random
      results and put them into $suggestedWordsArray.
    */
    function fillWithRundomMatchedValues() {
      const workArray = suggestedWordsArray,
            resultsArray = arrayOfAllResults,
            fullLenth = resultsArray.length,
            max = maxSuggestedResults,
            resultsNumbers = {};

      for(let i = 0; i < max; i++) {
        const random = Math.floor( Math.random() * fullLenth );

        if( !resultsNumbers[random] ) {
          workArray.push( resultsArray[random] );
          resultsNumbers[random] = true;
        } else {
          i--;
          console.log('random is repeated');
        }

      }
    }
  }

  render() {
    return (
      <div className="page-wrapper">
        <History />
        <div className="main-wrapper">
          <Main />
          <Input inputChange={ this.inputChangeHandler }
                 words={this.state.suggestedWordsArray}  />
        </div>
      </div>
    )
  }
}


















// class NewsItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hidden: true
//     };
//   }

//   clickHandler = () => {
//     this.setState({
//       hidden: !this.state.hidden
//     })
//   }

//   render() {
//     let author = this.props.data.author,
//         comment = this.props.data.text,
//         hidden  = this.state.hidden;
//     console.dir(this);

//     return (
//       <div className="news-item">
//         <button onClick={this.clickHandler}>click to show</button>
//         { author } : <br/>
//         <div className={'comment ' + (hidden ? 'hidden' : '')}>
//           { comment ? comment : "Комменатрий пустооооой"}
//         </div>
//       </div>
//     )
//   }
// }


// class News extends Component {
//   render() {

//     // loop
//     const news = this.props.data.map((item, index) => {
//       return (
//         <NewsItem data={item} key={index} />
//       )
//     });

//     return (
//       <div className="news">
//         {news} {/* set of NewsItem components*/}
//       </div>
//     )
//   }
// }


// class Checkbox extends Component {

//   changeHandler = (e) => {
//     this.props.checkHandler(e.target);
//   }

//   render() {
//     return (
//       <input type="checkbox" onChange={this.changeHandler}/>
//     )
//   }
// }


// class SendButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       full: this.props.full
//     };
//   }

//   render() {
//     return (
//       <button className={'button ' + (this.state.full ? 'full' : '')}>
//         Send
//       </button>
//     )
//   }
// }


// class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       full: false
//     };

//     this.full = {
//       input1: false,
//       input2: false,
//       checkbox: false
//     }
//   }


//   inputChangeHandler = (target, targetName) => {
//     let inputIsFilled = !!target.value;

//     // if status is not changed, don't do anything
//     if( this.full[targetName] === inputIsFilled) {
//       return;
//     }

//     this.full[targetName] = inputIsFilled;
//     this.isFilledAll();
//   }

//   checkboxHandler = (target) => {
//     this.full.checkbox = target.checked;

//     if(this.full.checkbox) {
//       this.isFilledAll();
//     }
//   }

//   isFilledAll = () => {
//     console.log(this.full); // delete

//     for(let key in this.full) {
//       if( !this.full[key] ) return false; // if anyone == false -> return
//     }

//     this.setState({
//       full: true
//     });

//     console.log('zapolneno'); // delete
//   }

//   render() {
//     console.log('рендеред');
//     return (
//       <div>
//         <Input name="input1" changeHandler={this.inputChangeHandler}/>
//         <Input name="input2" changeHandler={this.inputChangeHandler}/>
//         <Checkbox checkHandler={this.checkboxHandler}/>
//         <SendButton full={this.state.full}/>
//       </div>
//     )
//   }
// }

// class Input extends Component {
//   constructor(props) {
//     super(props);
//   }

//   changeHandler = (e) => {

//     const
//       inputRef = this.props.name,
//       input    = ReactDOM.findDOMNode( this.refs[inputRef] );

//     this.props.changeHandler(input, inputRef);
//   }

//   render() {
//     let name = this.props.name;

//     return (
//       <input name={name}
//              onChange={this.changeHandler}
//              defaultValue=""
//              ref={name} />
//     )
//   }
// }


// class Template extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <input/>
//     )
//   }
// }

export default App;

