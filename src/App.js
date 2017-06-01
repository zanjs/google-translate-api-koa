import React, { Component } from 'react';

import Header from './components/Header';
import Textarea from './components/Textarea';
import './App.css';

class App extends Component {

  state = {
    transResult: ''
  }

  changeVal = val => {

    // api翻译
    fetch('/api/translate/text',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: val
      })
    })
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      this.setState({ transResult: json.text.replace(/\n/g, '<br />') })
    }.bind(this)).catch(function(ex) {
      console.error('parsing failed', ex)
    })
    //this.setState({ transResult: val })
  }

  render() {
    return (
      <div>
        <Header/>
        <Textarea changeVal={this.changeVal} />
      </div>
    );
  }
}

export default App;
