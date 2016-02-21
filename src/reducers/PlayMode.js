import {PLAY_MODE} from '../actions/index';

export default function(state = false,{type,payload}) {
    console.log("action received",type,payload)
    switch(type) {
        case PLAY_MODE:
            
            return payload;
        break;
    }
    return state;
}