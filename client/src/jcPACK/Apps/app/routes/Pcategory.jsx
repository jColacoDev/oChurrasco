import '../App.scss'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { productsData } from '../Products';
import Gallery from '../../../components/Gallery/Gallery';
import { removeAccents } from '../../../utils/utils';

import catalogFile from "../../../../products/Geral-Euroestante.pdf"

export default function Pcategory() {
    const [products, setProducts] = useState([]);
    const [finalCategory, setFinalCategory] = useState([]);
    const [category, setCategory] = useState([]);
  

    const navigate = useNavigate();

    useEffect(()=>{
        const category = `${location.pathname.split('/')[3] || ""}`
        const final_category = `${location.pathname.split('/')[4] || ""}`

        setCategory(category)
        setFinalCategory(final_category);

        for(let pCategory of productsData.categories){
            if(final_category === ""){
                if(category === removeAccents(pCategory.label.replace(/\s+/g, '-').toLowerCase()))
                setProducts(pCategory.categories)
                
            }else{
                for(let pcategory of pCategory.categories){
                    if(final_category === removeAccents(pcategory.label.replace(/\s+/g, '-').toLowerCase()))
                    setProducts(pcategory.products)
                }
            }

            // if(final_category !== "" ? final_category : category === removeAccents(pCategory.label.replace(/\s+/g, '-').toLowerCase())){
            //     setProducts(pCategory.categories)
            // } 
        }
    },[navigate])

  return (
    <div className='Products'>
        <section className="breadcrumbs">
            <Link to="/app/home">Início</Link>
            <span>{`>`}</span>
            <Link to="/app/produtos">produtos</Link>

            {finalCategory === "" ? 
                <>
                    <span>{`>`}</span>
                    <span>{`${category}`}</span>
                </>
                :
                <>
                    <span>{`>`}</span>
                    <Link to={`/app/produtos/${category}`}>{category}</Link>
                    <span>{`>`}</span>
                    <span>{`${finalCategory}`}</span>
                </>
            }
        </section>

        <h2>{category !== finalCategory ? 
            `${category}` : ""} {finalCategory}
        </h2>
        
        {finalCategory !== "" &&
            <section>
                <h3>Catalogos</h3>
              
            </section>
        }
        <Gallery data={products}/>
    </div>
  )
}
