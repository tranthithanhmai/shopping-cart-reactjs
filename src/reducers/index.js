import { combineReducers } from 'redux';
import user from './user';
import breadcrumb from './breadcrumb';
import strSearch from './strSearch';

const appReducers = combineReducers({
	user,
	breadcrumb,
	strSearch
});

export default appReducers;