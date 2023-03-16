import '../../../../Apps/Apps.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    GET_ARTICLES_FROM_FAMILY, 
    GET_FAMILIES_FROM_FAMILY, 
    GET_PARENTS_FROM_FAMILY,
    GET_FAMILY_ID_FROM_LABELS_PATH 
} from '../../../../graphql/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import ProductsGallery from '../../../../components/ProductsGallery/ProductsGallery';
import { groupObjectsArrayByType } from '../../../../utils/utils';
import FamilyBreadCrumbs from '../../../../components/FamilyBreadCrumbs/FamilyBreadCrumbs';

const PAGE_BASE_URL="produtos";
const PRODUCTS_ID="640f0fdfeeadf8b0f5d5cf64";
const REQUEST_DELAY=500;

export default function ProductsPage() {
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const [crumbs, setCrumbs] = useState([]);
    const [families, setFamilies] = useState([]);
    const [currentLabelsPath, setCurrentLabelsPath] = useState([]);
    const [articlesByTypes, setArticlesByTypes] = useState([]);
    const [currentFamilyId, setCurrentFamilyId] = useState(PRODUCTS_ID);
    const navigate = useNavigate();
     /* ************************************************************ */
    /* QUERIES   ************************************************* */
    const {
        called: familiesFromFamilyCalled , 
        data: familiesFromFamilyData , 
        loading: familiesFromFamilyLoading, 
        error: familiesFromFamilyError
    } = useQuery(GET_FAMILIES_FROM_FAMILY, {
        onError: (error) => console.error("family from Family query error: ", error),
        fetchPolicy: "cache-and-network",
        variables: {familyId: currentFamilyId}
    });
    const {
        data: parentsFromFamilyData , 
        loading: parentsFromFamilyLoading, 
        error: parentsFromFamilyError
    } = useQuery(GET_PARENTS_FROM_FAMILY, {
        onError: (error) => console.error("family from Family query error: ", error),
        fetchPolicy: "cache-and-network",
        variables: {familyId: currentFamilyId}
    });
    const {
        data: articlesFromFamilyData , 
        loading: articlesFromFamilyLoading, 
        error: articlesFromFamilyError
    } = useQuery(GET_ARTICLES_FROM_FAMILY, {
        onError: (error) => console.error("family from Family query error: ", error),
        fetchPolicy: "cache-and-network",
        variables: {familyId: currentFamilyId}
    });
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
        setLoading(true);
        const timer = setTimeout(() => {
          setFamilies(familiesFromFamilyData?.familiesFromFamily);
          setLoading(false);
        }, REQUEST_DELAY);
        return () => clearTimeout(timer);
      }, [familiesFromFamilyData]);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setCrumbs(parentsFromFamilyData?.parentsFromFamily);
          setLoading(false);
        }, REQUEST_DELAY);
        return () => clearTimeout(timer);
      }, [parentsFromFamilyData]);

      useEffect(() => {
        if(parentsFromFamilyData?.parentsFromFamily)
            if(parentsFromFamilyData.parentsFromFamily[0]){
                console.log("parentsFromFamilyData: ", parentsFromFamilyData)
                setCrumbs(parentsFromFamilyData.parentsFromFamily)
                
                const pageLabel= parentsFromFamilyData.parentsFromFamily[parentsFromFamilyData.parentsFromFamily.length-1]?.label

                pageLabel && setPageTitle(pageLabel);
            }
    }, [parentsFromFamilyData])

    useEffect(() => {
        const path = location.pathname.split('/');
        const productsPath = path.splice(path.findIndex(i=>i==='produtos')+1,path.length);
        
        let aux = [...currentLabelsPath,...productsPath]
        let auxBase = [PAGE_BASE_URL,...productsPath]
        if(productsPath.length>currentLabelsPath.length)
            console.log(aux)
        else
            console.log(auxBase)
        
        // console.log(currentLabelsPath)
        setCurrentLabelsPath([PAGE_BASE_URL,...productsPath])

    },[location.pathname, navigate])

    useEffect(() => {
        if(currentLabelsPath){
            console.log("currentLabelsPath: ", currentLabelsPath)
            familyIdFromLabelsPath({variables:{labelsPath: currentLabelsPath}})
        }
    },[currentLabelsPath])

    useEffect(() => {
        if(familyIdFromLabelsPathData?.familyIdFromLabelsPath)
            if(familyIdFromLabelsPathData.familyIdFromLabelsPath[0]){
                // console.log("familyIdFromLabelsPathData: ", familyIdFromLabelsPathData?.familyIdFromLabelsPath[0])
                setCurrentFamilyId(familyIdFromLabelsPathData.familyIdFromLabelsPath[0]._id)
            }
    },[familyIdFromLabelsPathData])

    useEffect(() => {
        // familiesFromFamily({familyId: currentFamilyId});
        // articlesFromFamily({familyId: currentFamilyId});
        // parentsFromFamily({familyId: currentFamilyId});
    }, [currentFamilyId])

    useEffect(() => {
        // console.log(groupObjectsArrayByType(articlesFromFamilyData?.articlesFromFamily))
        console.log(articlesFromFamilyData)
        
        if(articlesFromFamilyData?.articlesFromFamily && 
            articlesFromFamilyData.articlesFromFamily) 
        setArticlesByTypes(groupObjectsArrayByType(articlesFromFamilyData.articlesFromFamily))

    }, [articlesFromFamilyData])

    useEffect(() => {
        if(familiesFromFamilyData?.familiesFromFamily)
            if(familiesFromFamilyData.familiesFromFamily[0] && familiesFromFamilyCalled){
                // console.log("familiesFromFamilyData: ", familiesFromFamilyData)

            }
    }, [familiesFromFamilyData])

  return (
    <div className='ProductsPage'>
    {/* {loading && <p>Loading...</p>} */}
    <FamilyBreadCrumbs
        baseUrl="/app"
        crumbs={crumbs} 
    />
    <h2>{pageTitle}</h2>
            
    {families?.length > 0 && <>
        <section>
            <span className='heading'>
                <h3>Categorias</h3>
                <hr />
            </span>
            <ProductsGallery 
                items={families}
                loading={loading}
            />
            <hr />
        </section>
    </>}
    {articlesByTypes?.map((articlesByType,i) =>
        <section key={i}>
            <span className='heading'>
                <h3>{articlesByType[0].type === "document_blank" ?
                    "Catalogos" : articlesByType[0].type === "product" ?
                        "Produtos" : articlesByType[0].type
                }</h3>
                <hr />
            </span>
            <ProductsGallery 
                flex={articlesByType[0]?.type === "document_blank" ? "start":"center"}
                items={articlesByType}
                loading={loading}
            />
        </section>
        )}
    </div>
  )
}
