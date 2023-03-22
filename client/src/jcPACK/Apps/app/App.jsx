import '../Apps.scss'
import './App.scss'
import React from 'react'
import Home from './routes/Home/Home'
import Contacts from './routes/Contacts/Contacts'
import AboutUs from './routes/AboutUs/AboutUs'
import Login from './routes/Login/Login'
import Dashboard from './routes/Dashboard/Dashboard'
import Menu from './routes/Menu/Menu'
import Reservation from './routes/Reservation/Reservation'
import Orders from './routes/Orders/Orders'
import Community from './routes/Community/Community'

export const appData = {
    id: "App",
    path: "/o-churrasco",
    label: "app",


    contactsData:{
        name: "O Churrasco",
        email: "geral@o-churrasco.pt",
        phone: "21 342 30 59",
        mobile: "21 342 30 59",
        address: "R. das Portas de Santo Antão 85",
        pCode: "1150-266 Lisboa",
        country: "Portugal",
        web: "https://jcolaco.dev/o-churrasco/",
    },

    routesData: [
        {
            path: "/home",
            type: "",
            title: "Home",
            element:  <Home /> ,
        },
        {
            path: "/menu",
            type: "",
            title: "Menu",
            element: <Menu />,            
        },
        {
            path: "/orders",
            type: "",
            title: "Orders",
            element: <Orders />,            
        },
        {
            path: "/reservation",
            type: "",
            title: "reservation",
            element: <Reservation /> ,            
        },
        {
            path: "/contacts",
            type: "",
            title: "Contacts",
            element: <Contacts /> ,            
        },
        {
            path: "/about-us",
            type: "",
            title: "About us",
            element: <AboutUs /> ,            
        },
        {
            path: "/community",
            type: "",
            title: "Community",
            element: <Community /> ,            
        },
        {
            path: "/dashboard",
            type: "private",
            element: <Dashboard />,
            title: "Dashboard",
        },
        {
            path: "/login",
            type: "public",
            element: <Login />,
            title: "Login",
        }
    ]
}