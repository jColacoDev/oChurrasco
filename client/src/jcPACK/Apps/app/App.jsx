import '../Apps.scss'
import './App.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export const appData = {
    id: "App",
    path: "/app",
    label: "app",

    routesData: [
        {
            path: "/home",
            type: "",
            title: "Home",
            element: <>
                <h1>Home</h1>
                <Link to="/app/contacts">contacts</Link>
                <Link to="/app/products">products</Link>
            </> ,
            navLinks: []
        },
        {
            path: "/contacts",
            type: "",
            title: "Contacts",
            element: <>
                <h1>Contacts</h1>
                <Link to="/app/home">Home</Link>
                <Link to="/app/products">products</Link>
            </> ,            
            navLinks: []
        },
        {
            path: "/products",
            type: "",
            title: "Products",
            element: <>
                <h1>Products</h1>
                <Link to="/app/home">Home</Link>
                <Link to="/app/contacts">Contacts</Link>
            </> ,            
            navLinks: []
        }
    ]
}