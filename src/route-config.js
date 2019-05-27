import React from 'react';

import HomePage from './pages/HomePage';
// import ProductItemPage from './pages/ProductListsPage';
import LoginPage from './pages/LoginPage';
import ProductListsPage from './pages/ProductListsPage';
import ProductItemDetail from './components/ProductItemDetail';


const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/product',
        exact: true,
        main: () => <ProductListsPage />
    },
    { 
        path: '/product-detail',
        exact: true,
        main: () => <ProductItemDetail />
    },
    { 
        path: '/login',
        exact: true,
        main: () => <LoginPage  />
    }
];

export default routes;