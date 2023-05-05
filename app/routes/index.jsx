import React, { Component } from 'react';
import loadable from 'utils/loadable';
import { AuthLayout, DashboardLayout } from 'layouts';

// AUTH ROUTES
const LoginView = loadable(() => import('../views/Auth/Login/LoginView'));
const RegisterView = loadable(() => import('../views/Auth/Register/RegisterView'));

// DASHBOARD ROUTES
const DashBoardView = loadable(() => import('../views/DashBoard/DashBoard/DashBoardView'));

export const ROUTES = [
    {
        path: '',
        verified: false,
        auth: false,
        exact: true,
        name: 'Auth',
        component: AuthLayout,
        childrens: [
            { path: '/login', exact: true, name: 'Login', component: LoginView },
            { path: '/register', exact: true, name: 'Register', component: RegisterView, },
            { path: '', redirect: '/login', component: Component }
        ],
    },
    {
        path: '',
        exact: true,
        auth: true,
        verified: false,
        name: 'Dashboard',
        component: DashboardLayout,
        childrens: [
            { path: '/dashboard', exact: true, name: 'Dashboard', component: DashBoardView },
            { path: '', redirect: '/dashboard', component: Component },
        ],
    },
];
