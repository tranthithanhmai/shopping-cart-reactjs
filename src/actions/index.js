import * as types from './../constants/ActionType';

export const actLogin = (username, password) => {
	return {
		type : types.USER_LOGIN,
		username,
        password
	}
}
export const actLogout = (username, password) => {
	return {
        type : types.USER_LOGOUT,
        username,
        password
	}
}

export const actSearch = (strSearch) => {
    return {
        type : types.CHANGE_SEARCH,
        strSearch
    }
}

export const actSort = (orderBy, orderDir) => {
    return {
        type : types.SORT_ITEM,
        orderBy, //orderBy: orderBy 
        orderDir //orderDir: orderDir 
    }
}

export const actCloseForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}


export const actOpenForm = () => {
    return {
        type : types.OPEN_FORM
    }
}

export const actToggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const actSubmitForm = (item) => {
    return {
        type : types.SUBMIT_FORM, 
        item
    }
}

export const actItemSelected = (item) => {
    return {
        type : types.ITEM_SELECTED,
        item
    }
}

export const actItemUnSelect = () => {
    return {
        type : types.ITEM_UNSELECT
    }
}

export const actDeleteItem = (id) => {
    return {
        type : types.DELETE_ITEM,
        id
    }
}


export const actAddProduct = (product, quantity) => {
    return {
        type: types.ADD_PRODUCT,
        product,
        quantity
    }
}

export const actDeleteProduct = (product) => {
    return {
        type : types.DELETE_PRODUCT,
        product
    }
}

export const actUpdateProduct = (product, quantity) => {
    return {
        type : types.UPDATE_PRODUCT,
        product,
        quantity
    }
}
