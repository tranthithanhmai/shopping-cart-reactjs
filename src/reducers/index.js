import { combineReducers } from 'redux';
import user from './user';
import breadcrumb from './breadcrumb';
import strSearch from './strSearch';
import sort from './sort';
import isShowForm from './isShowForm';
import product from './product';
import itemSelected from './itemSelected';

const appReducers = combineReducers({
	user,
	breadcrumb,
	strSearch,
	sort,
	isShowForm,
    product,
    itemSelected
});

export default appReducers;