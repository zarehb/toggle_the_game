import {SET_LEVEL, UPDATE_SWITCH, VALIDATE, PLAY_MODE} from '../actions/index';
import _ from 'lodash';

const LEVELS = {
    // bit representation of switch lamp link
    "level-1": {lampsCount:3, result: "", switches: [{value:false, type:1, toggle: 5},{value:false, type:1, toggle: 6},{value:false, type:1, toggle: 1}], level: 1},
    "level-2": {lampsCount:4, result: "", switches: [{value:false, type:1, toggle: 1},{value:false, type:1, toggle: 5},{value:false, type:1, toggle: 6},{value:false, type:1, toggle: 11}], level: 2},
    "level-3": {lampsCount:5, result: "", switches: [{value:false, type:1, toggle: 5},{value:false, type:1, toggle: 6},{value:false, type:1, toggle: 1}], level: 3}
};

let active = 1;

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

export default function(state = LEVELS["level-" + active],{type,payload}) {
   
    let switches = state.switches.slice();
    let _state = _.extend( _.clone( state ), switches);
	switch(type) {
	    case PLAY_MODE:
	        switches = switches.map((item) => {item.value=false; return item});
	        return _.extend( _.clone( state ), {switches} );
	        
	    break;
		case SET_LEVEL:
		    
		    return LEVELS["level-" + payload];
		    break;
		case UPDATE_SWITCH:
		    // new state to be returned
		    
	        if(!payload.mode) {
	            switches[payload.key].value = payload.value;
	            var result= pad((payload.value >>> 0).toString(2), state.lampsCount);
	            
	            return _.extend(_state,{switches,result});
	        }
	        else {
	            
	            
               
	            switches[payload.key].value = !switches[payload.key].value;
	            return  _.extend(_state,{switches});
	        }
	        break;
	    case VALIDATE:
	         
	        let result = 0;
	        
	        _.where(switches,{value: true}).forEach(({toggle}) => { console.log(result,toggle); result ^= toggle   });
	        result = (result >>> 0).toString(2);
	        result= pad(result, state.lampsCount);
	        
	        if( Math.pow(2, state.lampsCount ) -1  == parseInt(result,2)  ) {
                   // alert("congratulations you won");
                //    active++;
                _state.complete = true;
               //    _.delay( () => { this.props.setLevel( this.props.activeLevel.level + 1 ) }, 1000);
               } else {
                   _state.gameOver = true;
               }
               
	        return _.extend(_state,{switches, result });
	        
	        
	        break;
	}
	return state;
}