import './Header.scss'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productsData } from '../../Apps/app/Products'
import { removeAccents } from '../../utils/utils'
import Searchbar from '../Searchbar/Searchbar'
import { useDispatch } from "react-redux";
import { setHeaderHeight } from '../../reduxStore/headerHeightSlice'

export default function Header() {
    const [category, setCategory] = useState([]);
    const [navHeight, setNavHeight] = useState(null);
    const navigate = useNavigate();
    const navbarRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaderHeight(navHeight));
    }, [navHeight]);

    useEffect(() => {
        const onResize = () => {
            setNavHeight(navbarRef.current.offsetHeight);
        };

        window.addEventListener('resize', onResize);
        onResize(); // initialize height

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
        
    useEffect(()=>{
        // console.log(navigate.path)
        const category = `${location.pathname.split('/')[3] || ""}`
        const final_category = `${location.pathname.split('/')[4] || ""}`

        setCategory(category);
    },[navigate])
    

  return (
    <header ref={navbarRef} className='Header'>
        <main>
            <Link to="/app">
                <figure className='logo'></figure>
            </Link>
            <section className="right">
                <Searchbar />
                <Link className='account' to="/app/login">
                    <figure />
                </Link>
            </section>

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
