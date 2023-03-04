import '../App.scss'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { productsData } from '../Products';
import Gallery from '../../../components/Gallery/Gallery';
import PdfView from '../../../components/PdfView/PdfView';
import { stringToUrl } from '../../../utils/utils';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

export default function ProductsPage() {
    const [currentSelection, setCurrentSelection] = useState({});
    const [locationCrumbs, setLocationCrumbs] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const path = location.pathname.split('/');
        const productsPath = 
            path.splice(path.findIndex(i=>i==='produtos')+1,path.length);
        
        setCurrentSelection(
            returnSelectionFromPath(productsPath, productsData)
        );
    },[navigate])

    function returnSelectionFromCrumb(crumb, selectionData){
        for(let category of selectionData.categories){
            if(crumb == stringToUrl(category.ref))
                return category;
        }
        return {};
    }

    function returnSelectionFromPath(productsPath=[], productsData={}){
        let selectionData = productsData;
        let crumbs = []

        for(let productsCrumb of productsPath){
            selectionData= returnSelectionFromCrumb(productsCrumb, selectionData);
            crumbs.push(selectionData.label)
        }
        setLocationCrumbs(crumbs);

        return selectionData;
    }

    function artigoDe(word){
        let flag = true;

        const wordUrlized = stringToUrl(word);
        const filters = [
            "escolar",
            "fixas",
            "operativas"
        ]

        filters.map(filter=>{if(wordUrlized == filter)flag = false})

        return flag;
    }

  return (
    <div className='Products'>
        <Breadcrumbs basePath={`/app`} crumbs={["Produtos",...locationCrumbs]} />

        <h2>{locationCrumbs.map((crumb,i)=>
            <span key={i} 
                className={artigoDe(crumb) ? `artigoDe`: ""}
            >{crumb}</span>)}
        </h2>
        
        {currentSelection?.categories?.length > 0 &&
        <section>
            <span className='heading'>
                <h3>Categorias</h3>
                <hr />
            </span>
            <Gallery data={currentSelection.categories}/>
            <hr />
        </section>
        }

        {currentSelection?.catalogs?.length > 0 &&
            <section>
                <span className='heading'>
                    <h3>Catálogos</h3>
                    <hr />
                </span>
                <section className='catalogs'>
                    {currentSelection.catalogs.map((catalog, i)=>
                    <article key={i}>
                        {/* <PdfView file={catalog.catalog} linkPdf={true} /> */}
                        <a href={catalog.catalog} target="_blank" rel="noopener noreferrer">
                            {catalog.label}
                        </a>
                    </article>
                    )}
                </section>
                <hr />
            </section>
        }
        {currentSelection?.products?.length > 1 &&
        <section>
            <span className='heading'>
                <h3>Produtos</h3>
                <hr />
            </span>
            <Gallery url='/app/produto' data={currentSelection.products} />
            <hr />
        </section>
        }
    </div>
  )
}
