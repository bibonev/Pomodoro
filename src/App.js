import React, {Component} from 'react';
import Stopwatch from './components/Stopwatch/Stopwatch.js'
import './App.css';
import tomatoe from './assets/tomatoe.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={tomatoe} width="60" height="60" alt="Tomatoe"/>
          <h1>Pomodoro</h1>
          <Stopwatch/>
        </div>
      </div>
    );
  }
}

export default App;
