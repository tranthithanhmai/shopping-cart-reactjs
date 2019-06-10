import * as types from './../constants/ActionType';
import { LoginStore } from './../actions/login';

let defaultState = {
	token: LoginStore.getData('token')
};

const user = (state = defaultState, action) => {

	switch(action.type){
		case types.USER_LOGIN:
			return {
				...state,
				token: action.data.token
			};
		default:
			return state;
	}
}

export default user;