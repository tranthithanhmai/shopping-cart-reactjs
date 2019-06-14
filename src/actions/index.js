import * as types from './../constants/ActionType';
import * as callApi from './../services/apiCaller';
import {LoginStore} from './login';

export const actLoginRequest = (data) => {
  return dispatch => {
    return callApi.NoAuth('wordpress-demo/wp-json/jwt-auth/v1/token', 'POST', data).then(res => {
      const { token } = res.data;
      LoginStore.setData('token', token);
      dispatch(actLogin(res.data));
      return token;
    }).catch(function (error) {
      alert('Username or Password incorrect');
      console.log(error);
    });
  }
}
export const actLogin = (data) => {
  return {
    type: types.USER_LOGIN,
    data
  }
}

export const actSearch = (strSearch) => {
  return {
    type: types.CHANGE_SEARCH,
    strSearch
  }
}

export const actSort = (orderBy, orderDir) => {
  return {
    type: types.SORT_ITEM,
    orderBy, 
    orderDir
  }
}

//ADD PRODUCT
export const actAddProductRequest = (product) => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products', 'POST', product).then(res => {
      dispatch(actAddProduct(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product
  }
}

//ADD IMAGES
export const actAddImagesRequest = (uploadImages) => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wp/v2/media', 'POST', uploadImages).then(res => {
      dispatch(actAddImages(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actAddImages = (uploadImages) => {
  return {
    type: types.ADD_IMAGES,
    uploadImages
  }
}

//DELETE PRODUCT
export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(id));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id
  }
}
//SHOW PRODUCT

export const actFetchProductsRequest = () => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products
  }
}
//EDIT PRODUCT

export const actGetProductRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'GET', null).then(res => {
      console.log('EDIT PRODUCT : ', res);
      dispatch(actGetProduct(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actGetProduct = (product) => {
  console.log('product : ', product);
  return {
    type: types.EDIT_PRODUCT,
    product
  }
}

export const actUpdateProductRequest = (product) => {
  return async dispatch => {
    try {
      const res = await callApi.call(`wordpress-demo/wp-json/wc/v3/products/${product.id}`, 'PUT', product);
      dispatch(actUpdateProduct(res.data));
    }
    catch (error) {
      console.log(error.message);
    }
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product
  }
}

//EDIT Images

// export const actGetImagesRequest = (id) => {
//   return dispatch => {
//     return callApi.call(`wordpress-demo/wp-json/wp/v2/media/${id}`, 'GET', null).then(res => {
//       console.log('EDIT Images : ', res);
//       dispatch(actGetImages(res.data));
//     }).catch(error => {
//       console.log(error.message);
//     });
//   }
// }

// export const actGetImages = (uploadImages) => {
//   console.log('uploadImages : ', uploadImages);
//   return {
//     type: types.EDIT_IMAGES,
//     uploadImages
//   }
// }

// export const actUpdateImagesRequest = (uploadImages) => {
//   return dispatch => {
//     if(uploadImages.id){
//       return callApi.call(`wordpress-demo/wp-json/wp/v2/media/${uploadImages.id}`, 'PUT', uploadImages).then(res => {
//         dispatch(actUpdateImages(res.data));
//       }).catch(error => {
//         console.log(error.message);
//       });
//     }
//   }
// }

// export const actUpdateImages = (uploadImages) => {
//   return {
//     type: types.UPDATE_IMAGES,
//     uploadImages
//   }
// }

//SHOW CATEGORIES

export const actFetchCategoriesRequest = () => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products/categories', 'GET', null).then(res => {
      dispatch(actFetchCategories(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actFetchCategories = (categories) => {
  return {
    type: types.FETCH_CATEGORIES,
    categories
  }
}

//SHOW CARTS

export const actFetchCartsRequest = () => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/orders', 'GET', null).then(res => {
      dispatch(actFetchCarts(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actFetchCarts = (carts) => {
  return {
    type: types.FETCH_CART,
    carts
  }
}

//DELETE CARTS
export const actDeleteCartRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/orders/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteCart(id));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actDeleteCart = (id) => {
  return {
    type: types.DELETE_CART,
    id
  }
}