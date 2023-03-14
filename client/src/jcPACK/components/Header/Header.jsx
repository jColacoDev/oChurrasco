import './Header.scss'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { normalizePathLabel } from '../../utils/utils'
import Searchbar from '../Searchbar/Searchbar'
import { useDispatch } from "react-redux";
import { setHeaderHeight } from '../../reduxStore/headerHeightSlice'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_FAMILIES_FROM_FAMILY } from '../../graphql/queries'

const PRODUCTS_ID="640f0fdfeeadf8b0f5d5cf64";

export default function Header() {
    const dispatch = useDispatch();
    const [navFamilies, setNavFamilies] = useState([]);
    const [category, setCategory] = useState([]);
    const [navHeight, setNavHeight] = useState(null);
    const navigate = useNavigate();
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
    },[navigate])

    useMemo(() => {
        navFamilies !== familiesFromFamilyData && familiesFromFamilyData && 
            setNavFamilies(familiesFromFamilyData)
    }, [familiesFromFamilyData]);

    

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
            {navFamilies?.familiesFromFamily?.map((item, i)=>
                <Link key={i} 
                    to={`/app/produtos/${normalizePathLabel(item.label)}`}
                    className={normalizePathLabel(item.label) === category ? "active" : ""}
                >{item.label}</Link>
            )}
        </nav>
        <hr />
    </header>
  )
}
