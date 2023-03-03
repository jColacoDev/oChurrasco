import React, { useEffect } from 'react'
import Gallery from '../../../components/Gallery/Gallery'
import { productsData } from '../Products'
import ContactForm from '../../../components/ContactForm/ContactForm'
import GalleryCaroussel from '../../../components/GalleryCaroussel/GalleryCaroussel'
import {Dropbox} from 'dropbox';

export default function Home() {

  let dbx = new Dropbox({ accessToken:  import.meta.env.VITE_DROPBOX_TOKEN });

  useEffect(()=>{
    dbx.usersGetCurrentAccount()
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });

    dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response.entries);
    })
    .catch(function(error) {
      console.error(error);
    });
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
