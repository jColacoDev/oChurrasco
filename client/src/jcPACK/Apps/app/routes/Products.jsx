import '../App.scss'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { productsData } from '../Products';
import Gallery from '../../../components/Gallery/Gallery';

export default function Products() {

    useEffect(()=>{

        
    },[])

  return (
    <div className='Products'>
        <section className="breadcrumbs">
            <Link to="/app/home">Início</Link>
            <span>{`>`}</span>
            <span>{`produtos`}</span>
        </section>
        <h2>Produtos</h2>
        <Gallery data={productsData.categories}/>
    </div>
  )
}
