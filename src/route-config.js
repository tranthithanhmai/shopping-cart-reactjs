import React from 'react';

import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import AdminPage from './pages/Admin/AdminPage';
import CartPage from './pages/Cart/CartPage';
import ProductListsPage from './pages/Product/ProductListsPage';
import ProductItemPage from './pages/Product/ProductItemPage';


const routes = [
    { 
        path: '/shopping-cart-reactjs/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/shopping-cart-reactjs/product',
        exact: true,
        main: ({match}) => <ProductListsPage match = {match} />
    },
    { 
        path: "/shopping-cart-reactjs/product/:id",
        exact: true,
        main: ({match}) => <ProductItemPage match={match} />

    },
    { 
        path: '/shopping-cart-reactjs/admin',
        exact: true,
        main: ({match}) => <AdminPage match = {match}  />
    },
    { 
        path: '/shopping-cart-reactjs/shopping-cart',
        exact: true,
        main: ({match}) => <CartPage match = {match}  />
    },
    { 
        path: '/shopping-cart-reactjs/login',
        exact: true,
        main: () => <LoginPage  />
    }
];

export default routes;