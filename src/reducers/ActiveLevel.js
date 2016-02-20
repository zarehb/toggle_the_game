const LEVELS = {
    // bit representation of switch lamp link
    "level-1": {lampsCount:1, switches: [{type:1, toggle: 1}], level: 1 },
    "level-2": {lampsCount:2, switches: [{type:1, toggle: 1},{type:1, toggle: 3}], level: 2 },
    "level-3": {lampsCount:3, switches: [{type:1, toggle: 5},{type:1, toggle: 6},{type:1, toggle: 1}], level: 3}
};


let active = 1;

export default function(state = LEVELS[active],{type,payload}) {
	switch(type) {
		
	}
	return state;
}