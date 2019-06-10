import * as Types from './../constants/ActionType';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        case Types.EDIT_IMAGES:
            return action.uploadImages;
        default:
            return state;
    }
}

export default itemEditing;
