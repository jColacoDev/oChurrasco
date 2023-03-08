import './Header.scss'
import React, { useEffect } from 'react';
import { svg_icons } from '../icons';

export default function Header({
  title="title", 
  darkMode=true,
  setDarkMode= (f)=>f
}) {

  useEffect(()=>{
      document.documentElement.classList.toggle('light');
    }, [darkMode])
    
    function handleModeSwitchClick(e){
        e.preventDefault();
        setDarkMode(!darkMode);
    }

  return (
    <div className="Header">
        <h1 className="headerText">{title}</h1>
        <button 
          onClick={handleModeSwitchClick} 
          className={`mode-switch ${darkMode ? 'dark' : 'light'}`} 
          title="Switch Theme"
        >

        {svg_icons.moon}
        </button>
        {/* <button className="headerButton">Add Product</button> */}
  </div>
  )
}
