import { remove, reject } from 'lodash';
import * as config from './../constants/config';
import * as types from './../constants/ActionType';
// import * as callApi from './../services/apiCaller';
const uuidv4 = require('uuid/v4');
let defaultState = [];

let tasks = JSON.parse(localStorage.getItem(config.LIST_ITEM_LOCAL_STORAGE));
defaultState = (tasks !== null && tasks.length > 0) ? tasks : defaultState;
const items = (state = defaultState, action) => { // state = sort : { orderBy: 'name', orderDir: 'asc'}
    //action => store => appReducer => new State
    let id = null;
    switch (action.type) {
        
        case types.DELETE_ITEM:
            id = action.id;
            remove(state, (item) => {
                return item.id === id;
            });
            localStorage.setItem(config.LIST_ITEM_LOCAL_STORAGE, JSON.stringify(state));
            return [...state];
        case types.SUBMIT_FORM:
            console.log('action submit form: ', action);
            id = null;
            let {item} = action;
            if (item.id !== null) {//edit
                state = reject(state, { id: item.id });
                id = item.id;
    
            } else { //add
                id = uuidv4();
            }
    
            state.push({
                id: id,
                name: item.name,
                price: item.price,
                images: item.images,
                description : item.description
            });

            // callApi('wordpress-demo/wp-json/wc/v3/products', 'GET', {
            //     id: this.state.id,
            //     name: this.state.name,
            //     price: this.state.price,
            //     images: this.state.images,
            //     description : this.state.description
            // }).then(res => {
            //     console.log(res);
            // });

            console.log('state push : ', state);
    
            localStorage.setItem(config.LIST_ITEM_LOCAL_STORAGE, JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default items;