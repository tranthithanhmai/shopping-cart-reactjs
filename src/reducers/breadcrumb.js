import * as types from './../constants/ActionType';

let defaultState = [
	{to: '/shopping-cart-reactjs/', name: 'Home'},	// HomePage
	// ArtistPage
	// AlbumPage
];

const breadcrumb = (state = defaultState, action) => {
	let {to , name} = action;
	switch(action.type){

		case types.GO_HOME:
			state =  [{to: '/shopping-cart-reactjs/', name: 'Home'}];
			return [...state];

		case types.GO_PRODUCT:
			state[1] = {to , name};
			if(state.length > 2) state.splice(-1,1);

			return [...state];
			
		case types.GO_PRODUCT_ITEM:
			state[2] = {to , name};
			return [...state];

		default:
			return state;
	}
}

export default breadcrumb;