import React, { Component } from 'react';
import loadable from 'utils/loadable';
import { AuthLayout, DashboardLayout, PrivateLayout } from 'layouts';

// AUTH ROUTES
const LoginView = loadable(() => import('../views/Auth/Login/LoginView'));
const RegisterView = loadable(() => import('../views/Auth/Register/RegisterView'));
const ForgetPasswordView = loadable(() => import('../views/Auth/ForgetPassword/ForgetPasswordView'));

// DASHBOARD ROUTES
const DashBoardView = loadable(() => import('../views/DashBoard/DashBoard/DashBoardView'));
const CategoryView = loadable(() => import('../views/DashBoard/Categories/CategoryView'));
const ProductView = loadable(() => import('../views/DashBoard/Product/ProductView'));
const SubCategoryView = loadable(() => import('../views/DashBoard/SubCategory/SubCategoryView'));
const OrderView = loadable(() => import('../views/DashBoard/Orders/OrderView'));
const CustomerView = loadable(() => import('../views/DashBoard/Customers/CustomerView'));
const HomeView = loadable(() => import('../views/DashBoard/HomeView/HomeView'));
const AboutUsView = loadable(() => import('../views/DashBoard/AboutUs/AboutUsView'));

export const ROUTES = [
    {
        path: '',
        auth: false,
        exact: true,
        isAdminRoute: false,
        name: 'Auth',
        component: AuthLayout,
        childrens: [
            { path: '/', exact: true, name: 'Home', component: HomeView },
            { path: '/login', exact: true, name: 'Login', component: LoginView },
            { path: '/register', exact: true, name: 'Register', component: RegisterView, },
            { path: '/forget-password', exact: true, name: 'Register', component: ForgetPasswordView, },
            { path: '/about-us', exact: true, name: 'About Us', component: AboutUsView, },
            { path: '', redirect: '/', component: Component }
        ],
    },
    {
        path: '',
        exact: true,
        auth: true,
        isAdminRoute: false,
        name: 'Private',
        component: PrivateLayout,
        childrens: [
            { path: '/', exact: true, name: 'Home', component: HomeView },
            { path: '', redirect: '/', component: Component },
        ],
    },
    {
        path: '/admin/:type',
        exact: true,
        auth: true,
        isAdminRoute: true,
        name: 'Dashboard',
        component: DashboardLayout,
        childrens: [
            { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: DashBoardView },
            { path: '/admin/product', exact: true, name: 'Product', component: ProductView },
            { path: '/admin/category', exact: true, name: 'Categories', component: CategoryView },
            { path: '/admin/sub-category', exact: true, name: 'Sub Categories', component: SubCategoryView },
            { path: '/admin/orders', exact: true, name: 'Orders', component: OrderView },
            { path: '/admin/customers', exact: true, name: 'Customers', component: CustomerView },
            { path: '', redirect: '/', component: Component },
        ],
    },
];
