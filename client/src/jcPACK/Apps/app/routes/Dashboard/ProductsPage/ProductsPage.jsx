import '../../../App.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    GET_ARTICLES_FROM_FAMILY, 
    GET_FAMILIES_FROM_FAMILY, 
    GET_PARENTS_FROM_FAMILY,
    GET_FAMILY_ID_FROM_LABELS_PATH 
} from '../../../../../graphql/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import ProductsGallery from '../../../../../components/ProductsGallery/ProductsGallery';
import { groupObjectsArrayByType } from '../../../../../utils/utils';

const PAGE_BASE_URL="products";
const PRODUCTS_ID="640f0fdfeeadf8b0f5d5cf64";

export default function ProductsPage() {
    const [currentLabelsPath, setCurrentLabelsPath] = useState([]);
    const [articlesByTypes, setArticlesByTypes] = useState([]);
    const [currentFamilyId, setCurrentFamilyId] = useState(PRODUCTS_ID);
    const navigate = useNavigate();
     /* ************************************************************ */
    /* QUERIES   ************************************************* */
    // const [familiesFromFamily, {
    //     data: familiesFromFamilyData, 
    //     loading: familiesFromFamilyLoading, 
    //     error: familiesFromFamilyError
    // }] = useLazyQuery(GET_FAMILIES_FROM_FAMILY, {
    //     onError: (error) => console.error("family from Family query error: ", error),
    //     variables: {familyId: currentFamilyId}
    // })
    const {
        data: familiesFromFamilyData , 
        loading: familiesFromFamilyLoading, 
        error: familiesFromFamilyError
    } = useQuery(GET_FAMILIES_FROM_FAMILY, {
        onError: (error) => console.error("family from Family query error: ", error),
        fetchPolicy: "cache-and-network",
        variables: {familyId: currentFamilyId}
    });
    const [parentsFromFamily, {
        data: parentsFromFamilyData, 
        loading: parentsFromFamilyLoading, 
        error: parentsFromFamilyError
    }] = useLazyQuery(GET_PARENTS_FROM_FAMILY, {
        onError: (error) => console.error("parents from Family query error: ", error),
        variables: {familyId: currentFamilyId}
    })
    const [articlesFromFamily, {
        data: articlesFromFamilyData, 
        loading: articlesFromFamilyLoading, 
        error: articlesFromFamilyError
    }] = useLazyQuery(GET_ARTICLES_FROM_FAMILY, {
        onError: (error) => console.error("articles from Family query error: ", error),
        variables: {familyId: currentFamilyId}
    })
    const [familyIdFromLabelsPath, {
        data: familyIdFromLabelsPathData, 
        loading: familyIdFromLabelsPathLoading,
        called: familyIdFromLabelsPathCalled,
        refetch: familyIdFromLabelsPathRefetch,
    }] = useLazyQuery(GET_FAMILY_ID_FROM_LABELS_PATH, {
        onError: (error) => console.error("family id from labels path query error: ", error),
        fetchPolicy: "cache-and-network",
        notifyOnNetworkStatusChange: true,
        variables: {labelsPath: [PAGE_BASE_URL,...currentLabelsPath]}
    })
    /* ************************************************************ */
    /* useEffect   ************************************************* */

    useEffect(() => {
        const path = location.pathname.split('/');
        const productsPath = path.splice(path.findIndex(i=>i==='produtos')+1,path.length);
        // console.log([PAGE_BASE_URL,...productsPath])
        setCurrentLabelsPath([PAGE_BASE_URL,...productsPath])

    },[location.pathname, navigate])

    useEffect(() => {
        if(currentLabelsPath){
            console.log("currentLabelsPath: ", currentLabelsPath)
            familyIdFromLabelsPath({variables:{labelsPath: currentLabelsPath}})
        }
    },[currentLabelsPath])

    useEffect(() => {
        if(familyIdFromLabelsPathData?.familyIdFromLabelsPath[0]){
            console.log("familyIdFromLabelsPathData: ", familyIdFromLabelsPathData?.familyIdFromLabelsPath[0])
            setCurrentFamilyId(familyIdFromLabelsPathData?.familyIdFromLabelsPath[0]._id)
        }
    },[familyIdFromLabelsPathData])

    useEffect(() => {
        // familiesFromFamily({familyId: currentFamilyId});
        articlesFromFamily({familyId: currentFamilyId});
        parentsFromFamily({familyId: currentFamilyId});
    }, [currentFamilyId])

    useEffect(() => {
        // console.log(groupObjectsArrayByType(articlesFromFamilyData?.articlesFromFamily))

        // if(articlesFromFamilyData?.articlesFromFamily && 
        //     articlesFromFamilyData.articlesFromFamily) 
        // setArticlesByTypes(groupObjectsArrayByType(articlesFromFamilyData.articlesFromFamily))

    }, [articlesFromFamilyData])

    useEffect(() => {
        if(parentsFromFamilyData?.parentsFromFamily[0]){
            console.log("parentsFromFamilyData: ", parentsFromFamilyData)

        }
    }, [parentsFromFamilyData])
    useEffect(() => {
        if(familiesFromFamilyData?.familiesFromFamily[0]){
            console.log("familiesFromFamilyData: ", familiesFromFamilyData)

        }
    }, [familiesFromFamilyData])

  return (
    <div className='ProductsPage'>
        <h2>
            {
                parentsFromFamilyData?.parentsFromFamily[parentsFromFamilyData?.parentsFromFamily?.length]?.label
            }
        </h2>
        {familiesFromFamilyData?.familiesFromFamily?.length > 0 &&
        <section>
            <span className='heading'>
                <h3>Categorias</h3>
                <hr />
            </span>
            <ProductsGallery families={familiesFromFamilyData.familiesFromFamily}/>
            <hr />
        </section>
        }

        {
            // currentFamily?.catalogs?.length > 0 &&
            // <section>
            //     <span className='heading'>
            //         <h3>Catálogos</h3>
            //         <hr />
            //     </span>
            //     <section className='catalogs'>
            //         {currentFamily.catalogs.map((catalog, i)=>
            //         <article key={i}>
            //             {/* <PdfView file={catalog.catalog} linkPdf={true} /> */}
            //             <a href={catalog.catalog} target="_blank" rel="noopener noreferrer">
            //                 {catalog.label}
            //             </a>
            //         </article>
            //         )}
            //     </section>
            //     <hr />
            // </section>
        }
        
        {
        // currentFamily?.products?.length > 1 &&
        // <section>
        //     <span className='heading'>
        //         <h3>Produtos</h3>
        //         <hr />
        //     </span>
        //     <Gallery url='/app/produto' data={currentFamily.products} />
        //     <hr />
        // </section>
        }
        
    </div>
  )
}
