import React from 'react'
import Gallery from '../../../components/Gallery/Gallery'
import { productsData } from '../Products'
import ContactForm from '../../../components/ContactForm/ContactForm'

export default function Home() {
  return (
    <div className='Home'>
        <h2>Produtos</h2>
        <Gallery url="/app/produtos" data={productsData.categories} />
        <h2>Contactos</h2>
        <ContactForm />   
    </div>
  )
}
