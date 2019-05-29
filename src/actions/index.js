import * as types from './../constants/ActionType';

export const actLogin = (username, password) => {
	return {
		type : types.USER_LOGIN,
		username,
		password
	}
}
export const actLogout = () => {
	return {
		type : types.USER_LOGOUT
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
