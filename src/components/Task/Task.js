import React from 'react';
import createReactClass from 'create-react-class';

import './Task.css';

var Task = createReactClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        onRemoveTask: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {textDecoration: 'none'};
    },

    onTaskCompleted: function (e) {
        if (this.state.textDecoration === 'line-through') {
            this.setState({textDecoration: 'none'});
        } else {
            this.setState({textDecoration: 'line-through'});
        }
    },

    render: function () {
        return (
            <div className="task">
                <div className="task-name">
                    <a className="remove-task" onClick={this.props.onRemoveTask}>X</a>
                    <label>
                        <span
                            style={{
                            textDecoration: this.state.textDecoration
                        }}>{this.props.text}</span>
                        <input type="checkbox" onClick={this.onTaskCompleted}/>
                    </label>
                </div>
            </div>
        );
    }
});

export default Task;