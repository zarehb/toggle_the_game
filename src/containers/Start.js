import {Component} from 'react';
import React from 'react';

export default class Lamps extends Component {
    
    render() {
        return (<div className="start-screen">
                    
                    <a className="customBtn" onClick={this.props.onStart}>Start</a>
                </div>);
    }
}