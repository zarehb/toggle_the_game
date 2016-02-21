import {Component} from 'react';
import React from 'react';

export default class Lamps extends Component {
    addLamps() {
        console.log("add lamp")
        return _.range(this.props.count).map((itm,index) => { return (<li className={ this.props.result[index] == '1' ? 'on' : 'off'} key={index} ><span>Lamp</span></li>) } );    
    }
    
    render() {
        return (<div>
                    {this.addLamps.bind(this)()}
                </div>);
    }
}