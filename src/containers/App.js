import {Component} from 'react';
import React from 'react';
import Lamps from './Lamps';
import Start from './Start';

import Switches from './Switches';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';


import {setLevel} from '../actions/index';
import {setPlayMode} from '../actions/index';
import {validate} from '../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {started: false};
    }
    
    setStart() {
        this.props.setPlayMode( !this.props.playMode);
    }
    
    renderLevelComplete() {
        if(this.props.activeLevel.level!=10) {
            
            document.getElementsByTagName('body')[0].className = 'html complete';
            setTimeout(function() {
                 setTimeout( ()=> { 
                      document.getElementsByTagName('body')[0].className = 'html';
                     this.props.setPlayMode(false); 
                     
                     if(this.props.activeLevel.complete) this.props.setLevel(this.props.activeLevel.level+1);
                     },1000)
            }.bind(this), 100);
            return <div><h1 className="wire title">Well done!</h1></div>
        } else {
            return <div><h1 className="wire title">All the lamps are on!</h1>
            <a onClick={() => { this.props.setPlayMode(false); this.props.setLevel(1) }} className="customBtn">Restart</a></div>
        }
        
    }
    
    renderGameOver() {
        return <div><h1 className="wire title">Game Over</h1><a className="customBtn" onClick={() => { this.props.setPlayMode(false); this.props.setLevel(1) }}>Restart</a></div>
    }
    
    renderControls() {
        return (<div>
                    <Switches startMode={this.props.playMode} switches={this.props.activeLevel.switches} />
                    <br/>
                    <a className="customBtn" onClick={this.setStart.bind(this)}>{!this.props.playMode ? "Start" : "Reset"}</a>
                    <a className="customBtn" onClick={this.props.validate} disabled={!this.props.playMode} >Validate</a></div>);
    }
    
    renderGame() {
        return (<div className={this.props.activeLevel.complete ? 'complete' : '' }>
                    <h3>Level {this.props.activeLevel.level}</h3>
                    <Lamps count={this.props.activeLevel.lampsCount} result={this.props.activeLevel.result} />
                    { !this.props.activeLevel.gameOver && !this.props.activeLevel.complete ? this.renderControls() : null }
                    <div>{this.props.activeLevel.complete  ? this.renderLevelComplete.bind(this)() : "" }</div>
                    <div>{this.props.activeLevel.gameOver ? this.renderGameOver.bind(this)() : "" }</div>
                    <ol className="help">
                        <li>Click on switches to toggle the bulbes on and off.</li>
                        <li>Click on "Start" to set the switch combination.</li>
                        <li>Click on "Validate" to validate.</li>
                        <li>Two "on" switches wired to the same bulb, will turn it off.</li>
                        <li>If all the bulbes are on you will proceed to the next level!</li>
                        <li>Thanks for playing, contact me at <a href="mailto:zareh.b@gmail.com" target="_blank">zareh.b@gmail.com</a></li>
                   </ol>
                    </div>);
    }
    
    renderHelp() {
         return (<ol className="help">
                        <li>Click on switches to toggle the bulbes on and off</li>
                        <li>Click on "Start" to set the switch combination</li>
                        <li>Click on "Validate" to validate!</li>
                        <li>If all the bulbes are on you will proceed to next level!</li>
                        <li>Thanks for playing, email me at <a href="mailto:zareh.b@gmail.com" target="_blank">zareh.b@gmail.com</a></li>
                   </ol>);
    }
    
    render() {
        return (<div>
                   {  !this.state.started ? <Start onStart={() => this.setState({started: true}) } /> :  this.renderGame() }
                                
                </div>);
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setLevel, setPlayMode, validate }, dispatch);
}

function mapStateToProps({activeLevel,playMode}) {
	return { activeLevel,playMode };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);