import React, { Component } from 'react';
import logo from './logo.svg';

//import FormExample from "./FormExample"*/
/*import PopperExample from "./PopperExample"*/
//import BuildVisible from "./BuildVisible"
import IndecisionApp from "./IndecisionApp"
//import Counter from "./PlayGround/Counter"
//import LifeCycleLearn from './PlayGround/LifeCycleLearn'

import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <IndecisionApp />
        </div>
    );
  }
}

export default App;
