import React from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductListsPage from './pages/ProductListsPage';
import ProductItemPage from './pages/ProductItemPage';


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
        path: '/shopping-cart-reactjs/login',
        exact: true,
        main: () => <LoginPage  />
    }
];

export default routes;