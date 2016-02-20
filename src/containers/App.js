import {Component} from 'react';
import React from 'react';
import Lamps from './Lamps';
import Buttons from './Buttons';

export default class App extends Component {
    render() {
        return (<div>
                    <Lamps />
                    <Buttons />
                </div>);
    }
}