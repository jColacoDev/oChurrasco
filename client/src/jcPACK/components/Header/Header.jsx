import './Header.scss'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productsData } from '../../Apps/app/Products'
import { removeAccents } from '../../utils/utils'
import Searchbar from '../Searchbar/Searchbar'

export default function Header() {
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        // console.log(navigate.path)
        const category = `${location.pathname.split('/')[3] || ""}`
        const final_category = `${location.pathname.split('/')[4] || ""}`

        setCategory(category);
    },[navigate])

  return (
    <header className='Header'>
        <main>
            <Link to="/app">
                <figure className='logo'></figure>
            </Link>
            <Searchbar />
        </main>
        <hr />
        <nav>
            {productsData.categories.map((item, i)=>
                <Link key={i} 
                    to={`/app/produtos/${removeAccents(item.label.replace(/\s+/g, '-').toLowerCase())}`}
                    className={removeAccents(item.label.replace(/\s+/g, '-').toLowerCase()) === category ? "active" : ""}
                >{item.label}</Link>
            )}
        </nav>
        <hr />
    </header>
  )
}
