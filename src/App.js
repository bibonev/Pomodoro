import React, {Component} from 'react';
import Stopwatch from './components/Stopwatch/Stopwatch.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Pomodoro</h1>
          <Stopwatch/>
        </div>
      </div>
    );
  }
}

export default App;
