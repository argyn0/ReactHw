import React, { Component } from 'react';

class Task6 extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.FIO}</h3>
                <h3>{this.props.Phone}</h3>
                <h3>{this.props.Email}</h3>
                <h3>{this.props.City}</h3>
            </div>
        );
    }
}

export default Task6;
