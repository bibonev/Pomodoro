import React from 'react';
import createReactClass from 'create-react-class';

import './Stopwatch.css';

var Stopwatch = createReactClass({
    propTypes: {
        isClockRunning: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            running: false,
            elapsedTime: 0,
            previousTime: 0,
            setTime: 0,
            minutes: 0,
            seconds: 0,
            textColor: 'white'
        };
    },

    componentDidMount: function () {
        this.interval = setInterval(this.onTick, 100);
    },

    componentWillUnmount: function () {
        clearInterval(this.interval);
    },

    limitLength: function (e) {
        if (e.target.value.length > 2) {
            e.target.value = e
                .target
                .value
                .substring(0, 2);
        }
    },

    handleChangeMinutes: function (e) {
        this.limitLength(e);
        this.setState({minutes: e.target.value});
    },

    handleChangeSeconds: function (e) {
        this.limitLength(e);
        this.setState({seconds: e.target.value});
    },

    onStart: function () {
        let time = parseInt(this.state.minutes) * 60 + parseInt(this.state.seconds);
        this.setState({
            running: true,
            previousTime: Date.now(),
            elapsedTime: time,
            setTime: time
        });
        this
            .props
            .isClockRunning();
    },

    onStop: function () {
        this.setState({running: false});
        this
            .props
            .isClockRunning();
    },

    onReset: function () {
        this.setState({
            elapsedTime: this.state.setTime,
            previousTime: Date.now()
        });
    },

    onTick: function () {
        if (this.state.running && this.state.elapsedTime > 0.5) {
            var now = Date.now();
            this.setState({
                elapsedTime: this.state.elapsedTime - ((now - this.state.previousTime) / 1000),
                previousTime: now
            });
            if (this.state.elapsedTime < 3 && this.state.elapsedTime > 0) {
                if (this.state.textColor === 'white') {
                    this.setState({textColor: 'red'});
                } else {
                    this.setState({textColor: 'white'});
                }
            }
        } else if (Math.floor(this.state.elapsedTime) === 0 && this.state.running) {
            this.onStop();
            this.onReset();
        }
    },

    render: function () {
        let startStop = this.state.running
            ? <button className="start-button" onClick={this.onStop}>Stop</button>
            : <button className="start-button" onClick={this.onStart}>Start</button>;

        let minutes = (Math.floor(this.state.elapsedTime / 60))
            .toString()
            .length === 1
            ? "0" + Math.floor(this.state.elapsedTime / 60)
            : Math.floor(this.state.elapsedTime / 60);
        let seconds = (Math.floor(this.state.elapsedTime - minutes * 60))
            .toString()
            .length === 1
            ? "0" + Math.floor(this.state.elapsedTime - minutes * 60)
            : Math.floor(this.state.elapsedTime - minutes * 60);

        if (!this.state.running) {
            return (
                <div className="stopwatch">
                    <div className="input-div">
                        <input
                            type="number"
                            placeholder={minutes}
                            style={{
                            textAlign: 'right'
                        }}
                            onChange={this.handleChangeMinutes}
                            min={0}
                            max={60}/>
                        <label>:</label>
                        <input
                            type="number"
                            placeholder={seconds}
                            onChange={this.handleChangeSeconds}
                            min={0}
                            max={60}/>
                    </div>
                    {startStop}
                    <button className="reset-button" onClick={this.onReset}>Reset</button>
                </div>
            );
        } else {
            return (
                <div className="stopwatch">
                    <div className="input-div">
                        <label
                            style={{
                            color: this.state.textColor
                        }}>{minutes}
                            : {seconds}</label>
                    </div>
                    {startStop}
                    <button className="reset-button" onClick={this.onReset}>Reset</button>
                </div>
            );
        }
    }
});

export default Stopwatch;