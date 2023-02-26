import './Gallery.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { removeAccents } from '../../utils/utils'

export default function Gallery({url = "", data}) {


  
  return (
    <nav className='Gallery'>
        {data.map((item, i)=>
            <Link key={i} to={`${url !== "" ? url : window.location.pathname}/${removeAccents(item.ref.replace(/\s+/g, '-').toLowerCase())}`}>
              <div>
                  <figure style={{backgroundImage:`url(${item.image})`}}
                  ></figure>
                  <span>{item.label}</span>
              </div>
            </Link>
        )}
    </nav>
  )
}
