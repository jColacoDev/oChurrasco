import './Header.scss'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { normalizePathLabel } from '../../utils/utils'
import Searchbar from '../Searchbar/Searchbar'
import { useDispatch } from "react-redux";
import { setHeaderHeight } from '../../reduxStore/headerHeightSlice'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_FAMILIES_FROM_FAMILY } from '../../graphql/queries'
import FireFlame from '../FireFlame/FireFlame'

const PRODUCTS_ID="640f0fdfeeadf8b0f5d5cf64";

export default function Header() {
    const dispatch = useDispatch();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [navFamilies, setNavFamilies] = useState([]);
    const [category, setCategory] = useState([]);
    const [navHeight, setNavHeight] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const navbarRef = useRef(null);
    /* ************************************************************ */
    /* QUERIES   ************************************************* */
    const {
        data: familiesFromFamilyData , 
        loading: familiesFromFamilyLoading, 
        error: familiesFromFamilyError
    } = useQuery(GET_FAMILIES_FROM_FAMILY, {
        onError: (error) => console.error("family from Family query error: ", error),
        fetchPolicy: "cache-and-network",
        variables: {familyId: PRODUCTS_ID}
    });
    /* ************************************************************ */
    /* useEffect   ************************************************* */
    useEffect(() => {
        const handleResize= ()=> setIsNavOpen(window.innerWidth > 700);
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=> window.removeEventListener('resize', handleResize);
      }, []);

    useEffect(() => {
        const onResize= ()=> setNavHeight(navbarRef.current.offsetHeight);
        window.addEventListener('resize', onResize);
        onResize();
        return ()=> window.removeEventListener('resize', onResize);
    }, []);
    useEffect(() => {
        dispatch(setHeaderHeight(navHeight));
    }, [navHeight]);
        
    useMemo(()=>{
        const category = `${location.pathname.split('/')[3] || ""}`
        setCategory(category);
        setIsNavOpen(false);
    },[navigate])

    useMemo(() => {
        navFamilies !== familiesFromFamilyData && familiesFromFamilyData && 
            setNavFamilies(familiesFromFamilyData)
    }, [familiesFromFamilyData]);

  const toggleNav = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header ref={navbarRef} className='Header'>
        <main>
            <Link className='logoLink' to="/app">
                <p>
                    O&nbsp;
                    <span>C</span>
                    <span>H</span>
                    <span>U</span>
                    <span>R</span>
                    <span>R</span>A
                    <span>S</span>CO
                </p>
                <FireFlame /><FireFlame /><FireFlame />
                <FireFlame /><FireFlame /><FireFlame />
                <FireFlame /><FireFlame /><FireFlame />
                <FireFlame /><FireFlame /><FireFlame />
            </Link>
            
            <section>
                <nav>
                    <ul>
                        <li className={location.pathname === `/app/about-us` ? 'active' : ''}>
                        <Link to={`/app/about-us`}>&nbsp;&nbsp;About us&nbsp;&nbsp;</Link>
                        </li>
                        <li className={location.pathname === '/app/faq' ? 'active' : ''}>
                        <Link to={`/app/faq`}>&nbsp;&nbsp;FAQ&nbsp;&nbsp;</Link>
                        </li>
                        <li className={location.pathname === '/app/contacts' ? 'active' : ''}>
                        <Link to={`/app/contacts`}>&nbsp;&nbsp;Contacts&nbsp;&nbsp;</Link>
                        </li>
                    </ul>
                </nav>
                {/* <section className='right'>
                    <Searchbar />
                    <Link className='account' to="/app/login">
                        <figure />
                    </Link>
                </section> */}
            </section>

        </main>
        <hr />
        <div className='families'>
        {window.innerWidth <= 700 && (
            <button onClick={toggleNav}>Ver Produtos</button>
        )}
            <nav className={`products ${isNavOpen || window.innerWidth > 700 ? '' : 'closed'}`}>
                {navFamilies?.familiesFromFamily?.map((item, i)=>
                    <Link key={i} 
                    to={`/app/produtos/${normalizePathLabel(item.label)}`}
                    className={normalizePathLabel(item.label) === category ? "active" : ""}
                    >{item.label}</Link>
                    )}
            </nav>
        </div>
        <hr />
    </header>
  )
}
