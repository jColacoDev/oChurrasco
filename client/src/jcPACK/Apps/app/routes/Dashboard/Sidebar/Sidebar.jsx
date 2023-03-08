import './Sidebar.scss'
import React, { useContext, useRef } from 'react'
import {svg_icons} from '../icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../context/authContext';
import logoutIcon from '../../../../../../assets/images/icons/logout.png'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../../firebase/firebase';

export default function Sidebar({
    setPageIndex = (f)=>f, 
    pageIndex=0,
    accountPages = []
  }) {

    const {dispatch} = useContext(AuthContext)
    const ulRef = useRef();
    let navigate = useNavigate();

    useEffect(()=>{
      setPageIndex(0)
    }, []);

    useEffect(()=>{
      const itemList = ulRef.current.querySelectorAll(".sidebar-list-item");
      for(let item of itemList){
        if(item.dataset.index == pageIndex)
          item.classList.add("active")
        else
          item.classList.remove("active")
      }
    }, [pageIndex])
    
    function handleListItemClick(e){
        e.preventDefault();
        setPageIndex(e.currentTarget.dataset.index)
    }

    const logout = (e) => {
      auth.signOut();
      dispatch({
          type: 'LOGGED_IN_USER',
          payload: null
      });
      navigate('/app')
  }

    return(
    <div className="sidebar">
    <div className="sidebar-header">
      <div className="app-icon" />
      my Office
    </div>
    <ul ref={ulRef} className="sidebar-list">
      {accountPages.map((page, i)=>
        <li key={i} data-index={i} onClick={handleListItemClick} className="sidebar-list-item">
            <span>
                {page.icon}
                <span>{page.label}</span>
            </span>
        </li>
      )}
      <li>
        <Link to={"/app"}
            className="sidebar-list-item logout"
            onClick={logout}>
            <span>
                <img src={logoutIcon} alt="logout" />
                <span>Log out</span>
            </span>
        </Link>
      </li>
    </ul>

    {/* <div className="account-info">
      <div className="account-info-picture">
        <img src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHx3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="Account" />
      </div>
      <div className="account-info-name">Monica G.</div>
      <button className="account-info-more">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div> */}
  </div>
)}