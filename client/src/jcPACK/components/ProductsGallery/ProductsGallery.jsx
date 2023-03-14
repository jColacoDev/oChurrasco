import './ProductsGallery.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { normalizePathLabel } from '../../utils/utils'
import { useEffect } from 'react'

export default function ProductsGallery({
    url = "",
    families= [],
    articles= [],
}) {

  return (
    <nav className='ProductsGallery'>
        {families?.map((item, i)=>
        
        <Link key={i} to={`${url !== "" ? url : window.location.pathname.replace(/\/$/, '')}/${normalizePathLabel(item?.label)}`}>
              <div>
                  <figure style={{backgroundImage:`url(${item?.images[0]?.url})`}}
                  ></figure>
                  <span>{item?.label}</span>
              </div>
            </Link>
        )}
    </nav>  )
}
