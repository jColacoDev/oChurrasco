import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../../../components/Gallery/Gallery'
import { productsData } from '../Products'

export default function Home() {
  return (
    <div className='Home'>
        <h2>Produtos</h2>
        <Gallery url="/app/produtos" data={productsData.categories} />
    </div>
  )
}
