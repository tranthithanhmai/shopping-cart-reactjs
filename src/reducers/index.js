import { combineReducers } from 'redux';
import user from './user';
import breadcrumb from './breadcrumb';
import strSearch from './strSearch';
import sort from './sort';
import isShowForm from './isShowForm';
import items from './items';
import itemSelected from './itemSelected';

const appReducers = combineReducers({
	user,
	breadcrumb,
	strSearch,
	sort,
	isShowForm,
    items,
    itemSelected
});

export default appReducers;