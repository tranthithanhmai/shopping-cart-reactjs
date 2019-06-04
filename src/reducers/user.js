import * as types from './../constants/ActionType';

let defaultState = {
	isLogin: false,
	username: "",
	password: ""
};

const user = (state = defaultState, action) => {

	switch(action.type){
		case types.USER_LOGIN:
			console.log('action : ', action)
			return {...state};
		// case types.USER_LOGOUT:
		// 	state.username = null;
		// 	state.password = null;
		// 	state.isLogin = false;
		// 	return [...state];
		default:
			return state;
	}
}

export default user;