import {Component} from 'react';
import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {switchUpdated} from '../actions/index';

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {on: false};
    }
    trigger() {
        let key = this.props.index;
        let value = this.props.value;
        let mode = this.props.playMode;
        
        if(this.props.playMode) this.props.switchUpdated({key,value,mode});
        //else this.onMouseDown();
          
    }
    
    onMouseDown() {
        if(this.props.playMode) return;
        console.log( this.props.playMode )
       // this.setState({on: true});
        let key = this.props.index;
        let value = this.props.value;
        let mode = this.props.playMode;
        
        this.props.switchUpdated({key,value,mode});
    }
    
    onMouseUp() {
        if(this.props.playMode) return;
       // this.setState({on: false});
         let key = this.props.index;
        let value = false;
        let mode = this.props.playMode;
        
        this.props.switchUpdated({key,value,mode});
    }
    
    render() {
        
        return (<div onClick={this.trigger.bind(this)} onMouseUp={this.onMouseUp.bind(this)} onMouseDown={this.onMouseDown.bind(this)} 
        className={this.props.on ? 'switch wire on' : ' switch wire off' } >         
                    {this.props.on ? "on": "off"}
                </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({switchUpdated},dispatch);
}

function mapStateToProps({playMode,activeLevel}) {
    return {playMode};
}

export default connect(mapStateToProps,mapDispatchToProps)(Switch);


