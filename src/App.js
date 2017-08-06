//Libs
import React, {Component} from 'react';

//Components
import Stopwatch from './components/Stopwatch/Stopwatch.js';
import Task from './components/Task/Task.js';

//Assets
import './App.css';
import tomatoe from './assets/tomatoe.png';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      tasks: [],
      formDisabled: false
    };
  }

  onRemoveTask(index) {
    this
      .state
      .tasks
      .splice(index, 1);
    this.setState(this.state);
  }

  onNameChange(e) {
    this.setState({name: e.target.value});
  }

  onSubmit(e) {
    if (e) 
      e.preventDefault();
    this
      .state
      .tasks
      .push({text: this.state.name});
    this.setState({name: ""});
  }

  isClockRunning() {
    if (this.state.formDisabled === true) {
      this.setState({formDisabled: false});
    } else {
      this.setState({formDisabled: true});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={tomatoe} width="60" height="60" alt="Tomatoe"/>
          <h1>Pomodoro</h1>
          <Stopwatch
            isClockRunning={() => {
            this.isClockRunning()
          }}/>
        </div>
        {this
          .state
          .tasks
          .map(function (task, index) {
            return (< Task text = {
              task.text
            }
            onRemoveTask = {
              () => {
                this.onRemoveTask(index);
              }
            }
            key = {
              task.text
            } />);
          }.bind(this))}
        <div className="add-task-form">
          <fieldset disabled={this.state.formDisabled}>
            <form onSubmit={this
              .onSubmit
              .bind(this)}>
              <input
                type="text"
                value={this.state.name}
                onChange={this
                .onNameChange
                .bind(this)}
                placeholder="Task's title..."/>
              <input type="submit" value="Add"/>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
};

export default App;
