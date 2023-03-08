import React, { useEffect, useState } from 'react'
import Gallery from '../../../components/Gallery/Gallery'
import { productsData } from '../Products'
import ContactForm from '../../../components/ContactForm/ContactForm'
import GalleryCaroussel from '../../../components/GalleryCaroussel/GalleryCaroussel'

export default function Home() {
  const [folders, setFolders] = useState([]);
  
  useEffect(()=>{
  },[])


  return (
    <div className='Home'>
        <span className='heading'>
            <h3>Produtos</h3>
            <hr />
        </span>
        <Gallery url="/app/produtos" data={productsData.categories} />
        
        <span className='heading'>
            <h3>Destaques</h3>
            <hr />
        </span>
        <GalleryCaroussel url="/app/produtos" data={productsData.categories} />
        
        <span className='heading'>
            <h3>Contactos</h3>
            <hr />
        </span>
        <ContactForm />   
    </div>
  )
}
