import * as types from './../constants/ActionTypes';
const defaultState = ''; 

const strSearch = (state = defaultState, action) => { 
    switch (action.type) {
        case types.CHANGE_SEARCH:
            return action.strSearch;
        default:
            return state;
    }
}

export default strSearch;