import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

import './Stopwatch.css';

var Stopwatch = createReactClass({

    initialState: function () {
        return {running: false, elapsedTime: 0, previousTime: 0};
    },

    limitLength: function (e) {
        if (e.target.value.length > 2) {
            e.target.value = e
                .target
                .value
                .substring(0, 2);
        }
    },

    render: function () {
        return (
            <div className="stopwatch">
                <div className="input-div">
                    <input
                        type="number"
                        placeholder="00"
                        style={{
                        textAlign: 'right'
                    }}
                        onChange={this.limitLength}
                        min={0}
                        max={60}/>
                    <label>:</label>
                    <input
                        type="number"
                        placeholder="00"
                        onChange={this.limitLength}
                        min={0}
                        max={60}/>
                </div>
                <button className="start-button">Start</button>
                <button className="reset-button">Reset</button>
            </div>
        );
    }
});

export default Stopwatch;