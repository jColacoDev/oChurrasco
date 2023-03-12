import './Stock.scss'
import React from 'react'
import FormFamily from './FormFamily/FormFamily'
import FormArticle from './FormArticle/FormArticle';
import { useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { FAMILY_CREATE, ARTICLE_CREATE } from '../../../../../graphql/mutations';
import { useEffect } from 'react';
import { 
    GET_FAMILIES_FROM_FAMILY, 
    SINGLE_FAMILY, 
    GET_PARENTS_FROM_FAMILY,
    GET_ARTICLES_FROM_FAMILY
} from '../../../../../graphql/queries';
import FamilyBreadCrumbs from '../../../../../components/FamilyBreadCrumbs/FamilyBreadCrumbs';
import { useRef } from 'react';

export default function Stock({headerHeight}) {
    const stockRef = useRef();
    const [loading, setLoading] = useState(false);
    const [articlesByTypes, setArticlesByTypes] = useState([]);
    const [currentFormInputError, setCurrentFormInputError] = useState("");
    const [currentFamilyId, setCurrentFamilyId] = useState("root");
    const [inputFamily, setInputFamily] = useState({
        label: '',
        family: '',
        images: []
    });
    const [inputArticle, setInputArticle] = useState({
        code: '',
        label: '',
        type: '',
        family: '',
        about: '',
        abbr: '',
        brand: '',
        supplier: '',
        supplierRef: '',
        notes: '',
        images: [],
        services: [],
        price_purchase: '',
        price_sale: '',
        related_codes: [],
        related_families: [],
        related_articles: [],
    });

    const [singleFamily, {
        data: currentFamilyData, 
        loading: currentFamilyLoading, 
        error: currentFamilyError,
        refetch: singleFamilyRefetch, 
        called: singleFamilyCalled 
    }] = useLazyQuery(SINGLE_FAMILY,
        {variables: {familyId: currentFamilyId}})

    const [familiesFromFamilyRefetch, {
        data: familiesFromFamilyData, 
        loading: familiesFromFamilyLoading, 
        error: familiesFromFamilyError
    }] = useLazyQuery(GET_FAMILIES_FROM_FAMILY,
        {variables: {familyId: currentFamilyId}})

    const [parentsFromFamilyRefetch, {
        data: parentsFromFamilyData, 
        loading: parentsFromFamilyLoading, 
        error: parentsFromFamilyError
    }] = useLazyQuery(GET_PARENTS_FROM_FAMILY,
        {variables: {familyId: currentFamilyId}})

    const [familyCreate] = useMutation(FAMILY_CREATE,{
        onCompleted: () => {
            console.log("Family created")
        },
        onError: (error) => {
            console.error("error")
            console.error(error.graphQLErrors[0].message)
        }
    })

    const [articlesFromFamilyRefetch, {
        data: articlesFromFamilyData, 
        loading: articlesFromFamilyLoading, 
        error: articlesFromFamilyError
    }] = useLazyQuery(GET_ARTICLES_FROM_FAMILY,
        {variables: {familyId: currentFamilyId}})

    const [articleCreate] = useMutation(ARTICLE_CREATE,{
        onCompleted: () => {
            console.log("Article created")
        },
        onError: (error) => {
            console.error("error: ", error)
        }
    })
    useEffect(()=>{
        let familyNames = Array.from(stockRef.current.querySelectorAll('.familyName'))
        familyNames?.map((familyName)=>familyName.style.top=`${headerHeight + 2}px`)

        let familySubNames = Array.from(stockRef.current.querySelectorAll('.familySubName'))
        familySubNames?.map((familySubName)=>familySubName.style.top=`${headerHeight + 50}px`)

      },[headerHeight])

    useEffect(() => {
        console.log(groupByType(articlesFromFamilyData?.articlesFromFamily))

        if(articlesFromFamilyData?.articlesFromFamily && 
            articlesFromFamilyData.articlesFromFamily) 
        setArticlesByTypes(groupByType(articlesFromFamilyData.articlesFromFamily))

    }, [articlesFromFamilyData])

    useEffect(() => {
        setInputFamily({...inputFamily, family: currentFamilyData?.singleFamily._id})
        setInputArticle({...inputArticle, family: currentFamilyData?.singleFamily._id})
    }, [currentFamilyData])

    useEffect(() => {
        singleFamilyRefetch({familyId: currentFamilyId});
        articlesFromFamilyRefetch({familyId: currentFamilyId});
        familiesFromFamilyRefetch({familyId: currentFamilyId});
        parentsFromFamilyRefetch({familyId: currentFamilyId});
    }, [currentFamilyId])

    const handleFamilySubmit = (e) => {
        e?.preventDefault();
        setLoading(true);
        
        const familyToAdd = {...inputFamily, 
            family: currentFamilyData ? 
                currentFamilyData.singleFamily._id : "root"
        }
        let flag = "";
        if(!familyToAdd.label)
            flag= "a label";
        else if(!familyToAdd.family)
            flag= "a family";
        else if(!familyToAdd.images.length > 0)
            flag= "an image";
        setCurrentFormInputError(flag);

        if(!flag){
            familyCreate({variables: {input: familyToAdd}});
            stockRef.current.querySelector(`#FormFamily`)?.classList.add('displayNone')
        }
        setLoading(false);
    };

    const handleFamilyChange = (e) => {
        setInputFamily({...inputFamily, [e.target.name]: e.target.value})
    };

    const handleArticleChange = (e) => {
        setInputArticle({...inputArticle, [e.target.name]: e.target.value})
    };
    
    // useEffect(() => {
    //     console.info(inputArticle)
    // }, [inputArticle])

    const handleArticleSubmit = (e) => {
        e?.preventDefault();
        setLoading(true);
        
        const articleToAdd = {...inputArticle, 
            family: currentFamilyData ? 
            currentFamilyData.singleFamily._id : "root"
        }
        let flag = "";
                
        if(!articleToAdd.label)
            flag= "a label";
        else if(!articleToAdd.family)
            flag= "a family";
        else if(!articleToAdd.type)
            flag= "a type";
        else if(!articleToAdd.images.length > 0)
            flag= "an image";
        setCurrentFormInputError(flag);

        if(!flag){
            console.log(articleToAdd)

            articleCreate({variables: {input: articleToAdd}});
            stockRef.current.querySelector(`#FormArticle`)?.classList.add('displayNone')
        }
        setLoading(false);
    };

    const handleFormDisplayToggle = (e) =>{
        e?.preventDefault();
        let form = stockRef.current.querySelector(`#${e.currentTarget.dataset.formId}`)
        form.classList.toggle('displayNone')

        setInputFamily({
            label: '',
            family: '',
            images: []
        });
        setInputArticle({
            code: '',
            label: '',
            type: '',
            family: '',
            about: '',
            abbr: '',
            brand: '',
            supplier: '',
            supplierRef: '',
            notes: '',
            images: [],
            services: [],
            price_purchase: '',
            price_sale: '',
            related_codes: [],
            related_families: [],
            related_articles: []
        })
        setCurrentFormInputError("");
    }
    const handleFamilyClick = (e) =>{
        e?.preventDefault();
        setCurrentFamilyId(e.currentTarget.dataset.id)
    }

    function groupByType(arr) {
       if(arr){ 
        const groups = {};
        for (let i = 0; i < arr.length; i++) {
            const type = arr[i].type;
            if (!groups[type]) {
            groups[type] = [];
            }
            groups[type].push(arr[i]);
        }
        return Object.values(groups);
        }
    }

    return (
      <div ref={stockRef} id='Stock'>
        <h2 className='familyName'>Familia de artigos: 
        <span>
            <FamilyBreadCrumbs 
                handleFamilyClick={handleFamilyClick}
                crumbs={parentsFromFamilyData?.parentsFromFamily} 
            />
        </span>
        </h2>
            <button data-form-id="FormFamily" onClick={handleFormDisplayToggle}>
                <span />
                <p>Add Family</p>
            </button>
        <section className='submitForm'>
            <FormFamily
                operation='Add'
                inputError={currentFormInputError}
                loading={loading}
                setLoading={setLoading}
                handleFormDisplayToggle={handleFormDisplayToggle}
                
                handleFamilySubmit={handleFamilySubmit}
                handleFamilyChange={handleFamilyChange}
                
                setInputFamily={setInputFamily}
                inputFamily={inputFamily}
                optionsFamily={{family:currentFamilyData ? currentFamilyData.singleFamily.label : "Início"}}
            />
        </section>
        <section>
            <h3 className='familySubName'>subFamilias de artigos: </h3>
            {familiesFromFamilyData?.familiesFromFamily && 
                familiesFromFamilyData.familiesFromFamily.map(family=>
                <article key={family._id} data-id={family._id}
                    onClick={handleFamilyClick}
                >
                    <img src={family?.images && family.images[0].url} alt={family.label} />
                    <p>{family.label}</p>
                </article>
            )}
        </section>

        <h3 className='familySubName'>Artigos</h3>
            <button data-form-id="FormArticle" onClick={handleFormDisplayToggle}>
                <span />
                <p>Add Article</p>
            </button>
        <section className='submitForm'>
            <FormArticle
                operation='Add'
                inputError={currentFormInputError}
                setInputError={setCurrentFormInputError}
                loading={loading}
                setLoading={setLoading}
                handleFormDisplayToggle={handleFormDisplayToggle}

                handleArticleSubmit={handleArticleSubmit}
                handleArticleChange={handleArticleChange}

                setInputArticle={setInputArticle}
                inputArticle={inputArticle}
                optionsArticle={{family:currentFamilyData ? currentFamilyData.singleFamily.label : "Início"}}
            />
        </section>
        
        {articlesByTypes?.map(articlesByType =><>
            <h3>{articlesByType[0].type}</h3>
            <section>
            {articlesByType?.map((articleByType, i) =>
                <article key={i}>
                    <span />
                    <p>{articleByType.label}</p>
                </article>
            )}
            </section>
        </>)}
    </div>
  )
}
