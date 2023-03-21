import './MenuHamburger.scss'
import React from 'react'

export default function MenuHamburger({
    setOpen= (f)=>f,
    open= false
}) {

    const handleOpen=(e)=>{
        e.preventDefault();
        setOpen(!open)
    }

  return (
    <div className='MenuHamburger'>
        <input onChange={f=>f} checked={open} type="checkbox" id="hi" />
        <label  onClick={handleOpen} className="menu" htmlFor="hi">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </label>
    </div>
  )
}
