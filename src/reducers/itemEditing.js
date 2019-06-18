import * as Types from './../constants/ActionType';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        case Types.EDIT_IMAGES:
            return action.uploadImages;
        case Types.EDIT_CART:
            return action.cart;
        case Types.VIEW_CART:
            return action.cart;
        default:
            return state;
    }
}

export default itemEditing;
