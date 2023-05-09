import React, { Component } from 'react';
import loadable from 'utils/loadable';
import { AuthLayout, DashboardLayout } from 'layouts';

// AUTH ROUTES
const LoginView = loadable(() => import('../views/Auth/Login/LoginView'));
const RegisterView = loadable(() => import('../views/Auth/Register/RegisterView'));
const ForgetPasswordView = loadable(() => import('../views/Auth/ForgetPassword/ForgetPasswordView'));

// DASHBOARD ROUTES
const DashBoardView = loadable(() => import('../views/DashBoard/DashBoard/DashBoardView'));
const HomeView = loadable(() => import('../views/DashBoard/HomeView/HomeView'));
const AboutUsView = loadable(() => import('../views/DashBoard/AboutUs/AboutUsView'));

export const ROUTES = [
    {
        path: '',
        auth: false,
        exact: true,
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
        name: 'Dashboard',
        component: DashboardLayout,
        childrens: [
            { path: '/dashboard', exact: true, name: 'Dashboard', component: DashBoardView },
            { path: '', redirect: '/', component: Component },
        ],
    },
];
