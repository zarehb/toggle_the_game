import {Component} from 'react';
import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {switchUpdated} from '../actions/index';
import Switch from './Switch';

class Switches extends Component {
    switchUpdated(toggle) {
       if(!this.props.startMode) this.props.switchUpdated(toggle); 
    }
    
    onToggle() {
        if(this.props.startMode) {
            
        }  else {
            //this.props.switchUpdated({index, value: target.checked });
        }  
    }
    
    
    addSwitches() {
        return this.props.switches.map(
            (itm,index) => { return (<Switch  key={index} index={index} on={itm.value} value={itm.toggle} toggleMode={this.props.startMode}  />) } 
            );
    }
    
    render() {
        return (<div>
                <ul>
                    {this.addSwitches.bind(this)()}
                </ul><
                /div>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({switchUpdated},dispatch);
}


export default connect(null,mapDispatchToProps)(Switches);

