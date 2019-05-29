import { combineReducers } from 'redux';
import user from './user';
import breadcrumb from './breadcrumb';
import strSearch from './strSearch';
import sort from './sort';

const appReducers = combineReducers({
	user,
	breadcrumb,
	strSearch,
	sort
});

export default appReducers;