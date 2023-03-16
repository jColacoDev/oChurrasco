import '../Apps.scss'
import './App.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from './routes/Home/Home'
import Products from './routes/OLD_ProductPage'
import Contacts from './routes/Contacts/Contacts'
import AboutUs from './routes/AboutUs/AboutUs'
import Faq from './routes/Faq/Faq'
import ProductsPage from './routes/ProductsPage/ProductsPage'
import ProductPage from './routes/OLD_ProductPage'
import Login from './routes/Login/Login'
import Dashboard from './routes/Dashboard/Dashboard'

export const appData = {
    id: "App",
    path: "/app",
    label: "app",

    routesData: [
        {
            path: "/home",
            type: "",
            title: "Home",
            element:  <Home /> ,
            navLinks: []
        },
        {
            path: "/contactos",
            type: "",
            title: "Contactos",
            element: <Contacts /> ,            
            navLinks: []
        },
        {
            path: "/produtos",
            type: "",
            title: "Produtos",
            element: <ProductsPage /> ,            
            navLinks: []
        },
        {
            path: "/produtos/*",
            type: "",
            title: "Produtos",
            element: <ProductsPage /> ,            
            navLinks: []
        },
        {
            path: "/sobre-nos/*",
            type: "",
            title: "Sobre nós",
            element: <AboutUs /> ,            
            navLinks: []
        },
        {
            path: "/faq/*",
            type: "",
            title: "Perguntas frequentes",
            element: <Faq /> ,            
            navLinks: []
        },
        {
            path: "/produto/*",
            type: "",
            title: "Produto",
            element: <ProductPage /> ,            
            navLinks: []
        },
        {
            path: "/dashboard",
            type: "private",
            element: <Dashboard />,
            title: "Dashboard",
            navLinks: []
        },
        {
            path: "/login",
            type: "public",
            element: <Login />,
            title: "Login",
            navLinks: []
        }
    ]
}