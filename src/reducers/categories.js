import * as types from '../constants/ActionType';
var initialState = [];
const categories = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            state = action.categories;
            return [...state];
        default: return [...state];
    }
};

export default categories;