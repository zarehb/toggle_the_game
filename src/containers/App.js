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
        return <div>Good Job! Click to Continue <button onClick={() => { this.props.setPlayMode(false); this.props.setLevel(this.props.activeLevel.level+1) }}>Next Level</button></div>
    }
    
    renderGameOver() {
        return <div>Game Over! Click to Restart <button onClick={() => { this.props.setPlayMode(false); this.props.setLevel(1) }}>Restart</button></div>
    }
    
    renderGame() {
        return (<div><div>{this.props.activeLevel.complete ? this.renderLevelComplete.bind(this)() : "" }</div>
                    <div>{this.props.activeLevel.gameOver ? this.renderGameOver.bind(this)() : "" }</div>
                    
                    <button onClick={this.setStart.bind(this)}>{!this.props.playMode ? "Start" : "Reset"}</button>
                    <button onClick={this.props.validate} disabled={!this.props.playMode} >GO</button>
                    <Lamps count={this.props.activeLevel.lampsCount} result={this.props.activeLevel.result} />
                    <Switches startMode={this.props.playMode} switches={this.props.activeLevel.switches} /></div>);
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