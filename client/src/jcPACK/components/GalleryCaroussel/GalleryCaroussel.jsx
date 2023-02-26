import './GalleryCaroussel.scss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { removeAccents } from '../../utils/utils'

export default function GalleryCaroussel({url = "", data, views= 4}) {

  const [items, setItems] = useState([]);
  const [index, setIndex] = useState();


  useEffect(()=>{
    setItems(data.slice(0,views));
    setIndex(views);
  },[])

  
  useEffect(() => {
    const timer = setTimeout(() => {
        let aux = [];  

        if(index + 1 + views > data.length) {
          aux = [
            ...data.slice(index+1,data.length),
            ...data.slice(0, index+1+views-data.length)  
          ]
    
        }
        else{
          aux = data.slice(index+1,index+1+views)
        }
        setItems(aux);
        
        if(index + 1 >= data.length) setIndex(0);
        else setIndex(index + 1);
        
    }, 8000);
    return () => clearTimeout(timer);
}, [index]);


  return (
    <nav className='GalleryCaroussel'>
        {items.map((item, i)=>
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
