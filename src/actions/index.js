export const SET_LEVEL = "setGameLevel";

export const UPDATE_SWITCH = "updateSwitch";

export const SET_START = "setStart";

export const PLAY_MODE = "setPlay";

export const VALIDATE = "validate";

export function setLevel(level) {
    return {type: SET_LEVEL, payload: level}
}

export function setStart() {
    return {type: SET_START, payload: true}
}

export function switchUpdated(payload) {
    return {type: UPDATE_SWITCH, payload };
}

export function setPlayMode(payload) {
    return {type: PLAY_MODE, payload };
}

export function validate(payload) {
    return {type: VALIDATE, payload };
}
