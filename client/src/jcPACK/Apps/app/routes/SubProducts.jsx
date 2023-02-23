import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Gallery from '../../../components/Gallery/Gallery';
import { removeAccents } from '../../../utils/utils';
import { productsData } from '../Products';

export default function SubProducts() {
    let { category, subcategory } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        console.log(category)
        console.log(subcategory)
        console.log(window.location.pathname)

        for(let pCategory of productsData.categories){
            if(category === removeAccents(pCategory.label.replace(/\s+/g, '-').toLowerCase())){
                for(let subCategory of pCategory.categories){
                    if(subcategory === removeAccents(subCategory.label.replace(/\s+/g, '-').toLowerCase())){
        
                        setProducts(subCategory.products)
                        console.log(subCategory)
                    } 
                }
            } 
        }
    },[])

  return (
    <div className='SubProducts'>
        <section className="breadcrumbs">
            <Link to="/app/home">Início</Link>
            <span>{`>`}</span>
            <Link to="/app/home/produtos">Products</Link>
            <span>{`>`}</span>
            <Link to={`/app/produtos/${category}`}>{category}</Link>
            <span>{`>`}</span>
            <span>{`${subcategory}`}</span>
        </section>
        <h2>{category} de {subcategory}</h2>
        <Gallery data={products}/>
    </div>
  )
}
