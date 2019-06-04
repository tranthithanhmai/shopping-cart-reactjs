import * as types from './../constants/ActionType';
import * as callApi from './../services/apiCaller';

export const actLogin = (username, password) => {
	return {
		type : types.USER_LOGIN,
		username,
        password
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

export const actCloseForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}


export const actOpenForm = () => {
    return {
        type : types.OPEN_FORM
    }
}

export const actToggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const actSubmitForm = (item) => {
    return {
        type : types.SUBMIT_FORM, 
        item
    }
}

export const actItemSelected = (item) => {
    return {
        type : types.ITEM_SELECTED,
        item
    }
}

export const actItemUnSelect = () => {
    return {
        type : types.ITEM_UNSELECT
    }
}

export const actDeleteItem = (id) => {
    return {
        type : types.DELETE_ITEM,
        id
    }
}

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('wordpress-demo/wp-json/wc/v3/products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type : types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}
export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi.call(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi.call(`wordpress-demo/wp-json/wc/v3/products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : types.UPDATE_PRODUCT,
        product
    }
}









export const actAddProductRequest = (product) => {
    return dispatch => {
        console.log('Product : ' , product);
        return callApi.call('wordpress-demo/wp-json/wc/v3/products', 'POST', product).then(res => {
            console.log('Add Product : ' , res);
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}


