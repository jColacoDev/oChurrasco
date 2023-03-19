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
        <label  onClick={handleOpen} class="menu" for="hi">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </label>
    </div>
  )
}
