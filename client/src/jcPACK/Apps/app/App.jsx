import '../Apps.scss'
import './App.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from './routes/Home'
import { productsData } from './Products'
import Gallery from '../../components/Gallery/Gallery'
import SubProducts from './routes/SubProducts'
import Products from './routes/Products'
import Pcategory from './routes/Pcategory'

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
            path: "/contacts",
            type: "",
            title: "Contacts",
            element: <>
                <h1>Contacts</h1>
                <Link to="/app/home">Home</Link>
                <Link to="/app/produtos">products</Link>
            </> ,            
            navLinks: []
        },
        {
            path: "/produtos",
            type: "",
            title: "Produtos",
            element: <Products /> ,            
            navLinks: []
        },
        {
            path: "/produtos/*",
            type: "",
            title: "Produtos",
            element: <Pcategory /> ,            
            navLinks: []
        },
        // {
        //     path: "/produtos/:category/:final_category",
        //     type: "",
        //     title: "Subprodutos",
        //     element: <SubProducts /> ,            
        //     navLinks: []
        // }
    ]
}