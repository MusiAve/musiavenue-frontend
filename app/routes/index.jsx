import React, { Component } from 'react';
import loadable from 'utils/loadable';
import { AuthLayout, DashboardLayout, PrivateLayout } from 'layouts';

// AUTH ROUTES
const LoginView = loadable(() => import('../views/Auth/Login/LoginView'));
const RegisterView = loadable(() => import('../views/Auth/Register/RegisterView'));
const ForgetPasswordView = loadable(() => import('../views/Auth/ForgetPassword/ForgetPasswordView'));

// DASHBOARD ROUTES
const DashBoardView = loadable(() => import('../views/DashBoard/DashBoard/DashBoardView'));
// Products
const ProductView = loadable(() => import('../views/DashBoard/Product/ProductView'));
const AddProductView = loadable(() => import('../views/DashBoard/Product/AddProductView'));
const EditProductView = loadable(() => import('../views/DashBoard/Product/EditProductView'));
// Category
const CategoryView = loadable(() => import('../views/DashBoard/Categories/CategoryView'));
const AddCategoryView = loadable(() => import('../views/DashBoard/Categories/AddCategoryView'));
const EditCategoryView = loadable(() => import('../views/DashBoard/Categories/EditCategoryView'));

// Sub-Category
const SubCategoryView = loadable(() => import('../views/DashBoard/SubCategory/SubCategoryView'));
const AddSubCategoryView = loadable(() => import('../views/DashBoard/SubCategory/AddSubCategoryView'));
const EditSubCategoryView = loadable(() => import('../views/DashBoard/SubCategory/EditSubCategoryView'));

const OrderView = loadable(() => import('../views/DashBoard/Orders/OrderView'));
const ProfileView = loadable(() => import('../views/DashBoard/Profile/ProfileView'));

// Customer
const CustomerView = loadable(() => import('../views/DashBoard/Customers/CustomerView'));
const CustomerProfileView = loadable(() => import('../views/DashBoard/Customers/CustomerProfileView'));
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
            // product
            { path: '/admin/product', exact: true, name: 'Product', component: ProductView },
            { path: '/admin/add-product', exact: true, name: 'Add Product', component: AddProductView },
            { path: '/admin/edit-product', exact: true, name: 'Edit Product', component: EditProductView },
            // category
            { path: '/admin/category', exact: true, name: 'Categories', component: CategoryView },
            { path: '/admin/add-category', exact: true, name: 'Add Category', component: AddCategoryView },
            { path: '/admin/edit-category', exact: true, name: 'Edit Category', component: EditCategoryView },
            // sub-Category
            { path: '/admin/sub-category', exact: true, name: 'Sub Categories', component: SubCategoryView },
            { path: '/admin/add-subcategory', exact: true, name: 'Add Category', component: AddSubCategoryView },
            { path: '/admin/edit-subcategory', exact: true, name: 'Edit Category', component: EditSubCategoryView },

            { path: '/admin/orders', exact: true, name: 'Orders', component: OrderView },
            // customers
            { path: '/admin/customers', exact: true, name: 'Customers', component: CustomerView },
            { path: '/admin/customer-profile', exact: true, name: 'Customers Profile', component: CustomerProfileView },
            { path: '/admin/profile', exact: true, name: 'My Profile', component: ProfileView },
            { path: '', redirect: '/', component: Component },
        ],
    },
];
