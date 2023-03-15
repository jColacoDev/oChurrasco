import './ProductsGallery.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { normalizePathLabel } from '../../utils/utils'

export default function ProductsGallery({
    flex= "center",
    url = "",
    loading= false,
    items= [],
}) {
  return (
    <nav className={`${flex && `flex-${flex}`} ProductsGallery`}>
        {items?.map((item, i)=>
            item.type === "document_blank" ?
        <a key={i} target="_blank" rel="noopener noreferrer"
            className='document_blank'
            href={!loading ? `https://${url !== "" ? normalizePathLabel(url) : normalizePathLabel(item.url)}` : "#"}>
            <span>{item.label}</span>
        </a>
        : item.type === "product" ?     
        <Link key={i}
            to={!loading ? `${url !== "" ? url : window.location.pathname.replace(/\/$/, '')}/${normalizePathLabel(item.code || item._id)}` : "#"}>
            <div>
                <figure style={{backgroundImage:`url(${item.images[0]?.url})`}}
                ></figure>
                <span>{item.label}</span>
            </div>
        </Link>
        :
        <Link key={i}
            to={!loading ? `${url !== "" ? url : window.location.pathname.replace(/\/$/, '')}/${normalizePathLabel(item.label)}` : "#"}>
            <div>
                <figure style={{backgroundImage:`url(${item.images[0]?.url})`}}
                ></figure>
                <span>{item.label}</span>
            </div>
        </Link>

            
        )}
    </nav>  )
}
