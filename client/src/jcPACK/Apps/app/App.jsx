import '../Apps.scss'
import './App.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from './routes/Home'
import Products from './routes/ProductPage'
import Contacts from './routes/Contacts'
import AboutUs from './routes/AboutUs'
import Faq from './routes/Faq'
import ProductsPage from './routes/Dashboard/ProductsPage/ProductsPage'
import ProductPage from './routes/ProductPage'
import Login from './routes/Login'
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