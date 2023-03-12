import '../../../App.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Gallery from '../../../../../components/Gallery/Gallery';
import { 
    GET_ARTICLES_FROM_FAMILY, 
    GET_FAMILIES_FROM_FAMILY, 
    GET_PARENTS_FROM_FAMILY,
    GET_FAMILY_ID_FROM_LABELS_PATH 
} from '../../../../../graphql/queries';
import { useLazyQuery } from '@apollo/client';

export default function ProductsPage() {
    const [currentLabelsPath, setCurrentLabelsPath] = useState([]);
    const [currentFamily, setCurrentFamily] = useState({});
    const [currentFamilyId, setCurrentFamilyId] = useState("root");
    const navigate = useNavigate();
 
    /* ************************************************************ */
    /* QUERIES   ************************************************* */
    const [familyIdFromLabelsPathRefetch, {
        data: familyIdFromLabelsPathData, 
        loading: familyIdFromLabelsPathLoading
    }] = useLazyQuery(GET_FAMILY_ID_FROM_LABELS_PATH, {
        onError: (error) => console.error("family id from labels path query error: ", error),
        variables: {labelsPath: currentLabelsPath}
    })
    const [parentsFromFamilyRefetch, {
        data: parentsFromFamilyData, 
        loading: parentsFromFamilyLoading
    }] = useLazyQuery(GET_PARENTS_FROM_FAMILY, {
        onError: (error) => console.error("parents from Family query error: ", error),
        variables: {familyId: currentFamilyId}
    })
    const [familiesFromFamilyRefetch, {
        data: familiesFromFamilyData, 
        loading: familiesFromFamilyLoading
    }] = useLazyQuery(GET_FAMILIES_FROM_FAMILY, {
        onError: (error) => console.error("family from Family query error: ", error),
        variables: {familyId: currentFamilyId}
    })
    const [articlesFromFamilyRefetch, {
        data: articlesFromFamilyData, 
        loading: articlesFromFamilyLoading
    }] = useLazyQuery(GET_ARTICLES_FROM_FAMILY, {
        onError: (error) => console.error("articles from Family query error: ", error),
        variables: {familyId: currentFamilyId}
    })
    /* ************************************************************ */
    /* useEffect   ************************************************* */
    useEffect(()=>{
        const path = location.pathname.split('/');
        const productsPath = 
            path.splice(path.findIndex(i=>i==='produtos')+1,path.length);
        
        console.log(productsPath)

        familyIdFromLabelsPathRefetch({labelsPath: currentLabelsPath})
    },[navigate])

    useEffect(() => {
        if(currentFamilyId && currentFamilyId !== "root")
            parentsFromFamilyRefetch({familyId: currentFamilyId});
        familiesFromFamilyRefetch({familyId: currentFamilyId});
        articlesFromFamilyRefetch({familyId: currentFamilyId});
    }, [currentFamilyId])
    
    useEffect(() => {
        console.log(familyIdFromLabelsPathData)
        // setCurrentFamilyId(familyIdFromLabelsPathData);
    }, [familyIdFromLabelsPathData])

    useEffect(() => {
        console.log(parentsFromFamilyData)
    }, [parentsFromFamilyData])
    useEffect(() => {
        console.log(familiesFromFamilyData)
    }, [familiesFromFamilyData])
    useEffect(() => {
        console.log(articlesFromFamilyData)
    }, [articlesFromFamilyData])

    /* ************************************************************ */

  return (
    <div className='ProductsPage'>

        <h2>
            Title
        </h2>
        
        {currentFamily?.categories?.length > 0 &&
        <section>
            <span className='heading'>
                <h3>Categorias</h3>
                <hr />
            </span>
            <Gallery data={currentFamily.categories}/>
            <hr />
        </section>
        }

        {currentFamily?.catalogs?.length > 0 &&
            <section>
                <span className='heading'>
                    <h3>Catálogos</h3>
                    <hr />
                </span>
                <section className='catalogs'>
                    {currentFamily.catalogs.map((catalog, i)=>
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
        {currentFamily?.products?.length > 1 &&
        <section>
            <span className='heading'>
                <h3>Produtos</h3>
                <hr />
            </span>
            <Gallery url='/app/produto' data={currentFamily.products} />
            <hr />
        </section>
        }
    </div>
  )
}
