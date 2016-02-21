import {Component} from 'react';
import React from 'react';

export default class Lamps extends Component {
    
    render() {
        return (<div>
                    <h1>Switch, the game</h1>
                    <h2>by Zareh Boghozian</h2>
                    <h3>zareh.b@gmail.com</h3>
                    <button onClick={this.props.onStart}>Start</button>
                </div>);
    }
}