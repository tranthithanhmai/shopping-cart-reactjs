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
