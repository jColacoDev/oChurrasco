import './Stock.scss'
import React from 'react'
import FormFamily from './FormFamily/FormFamily'
import FormArticle from './FormArticle/FormArticle';
import { useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { FAMILY_CREATE } from '../../../../../graphql/mutations';
import { useEffect } from 'react';
import { 
    GET_FAMILIES_FROM_FAMILY, SINGLE_FAMILY, GET_PARENTS_FROM_FAMILY
} from '../../../../../graphql/queries';
import FamilyBreadCrumbs from '../../../../../components/FamilyBreadCrumbs/FamilyBreadCrumbs';

export default function Stock() {
    const [loading, setLoading] = useState(false);
    const [currentFamilyId, setCurrentFamilyId] = useState("root");
    const [inputFamily, setInputFamily] = useState({
        label: '',
        family: '',
        images: []
    });
    const [selectedArticle, setSelectedArticle] = useState(
        {
            general: {
                code: '',
                label: '',
                abbr: '',
                about: '',
                brand: {
                    ref: '',
                    label: '',
                    model: '',
                },
                type: '',
                family: '',
                supplier: '',
                supplierRef: '',
                observation: '',
            },
            price: {
                purchase: '',
                sale: ''
            },
            services: [],
            related: {
                families: [],
                articles: []
            },
            images: [
                {
                    label: '',
                    url: '',
                }
            ],
        }
    );
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
        onError: (error) => {
            console.log("error")
            console.log(error.graphQLErrors[0].message)
        }
    })

    useEffect(() => {
        setInputFamily({...inputFamily, family: currentFamilyData?.singleFamily._id})
    }, [currentFamilyData])
    useEffect(() => {
        console.log(familiesFromFamilyData)
    }, [familiesFromFamilyData])

    useEffect(() => {
        singleFamilyRefetch({familyId: currentFamilyId});
        familiesFromFamilyRefetch({familyId: currentFamilyId});
        parentsFromFamilyRefetch({familyId: currentFamilyId});
    }, [currentFamilyId])


    const handleFamilySubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        console.log( {...inputFamily, 
            family: currentFamilyData ? 
                currentFamilyData.singleFamily._id : "root"
        })

        familyCreate({variables: {input: {...inputFamily, 
            family: currentFamilyData ? 
                currentFamilyData.singleFamily._id : "root"
        }}});

        setLoading(false);
    };
    const handleArticleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // articleCreate({variables: {input: selectedArticle}});
        setLoading(false);
    };

    const handleFamilyChange = (e) => {
        setInputFamily({...inputFamily, [e.target.name]: e.target.value})
    };
    const handleArticleChange = (e) => {
        setSelectedArticle({...selectedArticle, [e.target.name]: e.target.value})
    };
    const handleFormDisplay = (e) =>{
        e.preventDefault();
        let form = e.currentTarget.parentElement.querySelector('form')
        form?.classList.toggle('displayNone')
    }
    const handleFamilyClick = (e) =>{
        e.preventDefault();
        setCurrentFamilyId(e.currentTarget.dataset.id)
    }

    return (
      <div className='Stock'>
        <FamilyBreadCrumbs 
            handleFamilyClick={handleFamilyClick}
            crumbs={parentsFromFamilyData?.parentsFromFamily} 
        />

        <h2>Familia de Artigos</h2>
        <section className='submitForm'>
            <button onClick={handleFormDisplay}>
                <span />
                <p>Add Family</p>
            </button>
            <FormFamily
                handleFamilySubmit={handleFamilySubmit}
                handleFamilyChange={handleFamilyChange}
                loading={loading}
                setLoading={setLoading}
                inputFamily={inputFamily}
                setInputFamily={setInputFamily}
                optionsFamily={{family:currentFamilyData ? currentFamilyData.singleFamily.label : "Início"}}
            />
        </section>
        <section>
            {console.log(familiesFromFamilyData.familiesFromFamily)}
            {familiesFromFamilyData?.familiesFromFamily && familiesFromFamilyData.familiesFromFamily.map(family=>
                <article key={family._id} data-id={family._id}
                    onClick={handleFamilyClick}
                >
                    <img src={family?.images && family.images[0].url} alt={family.label} />
                    <p>{family.label}</p>
                </article>
            )}
        </section>
        <h2>Artigos</h2>
        <section className='submitForm'>
            <button onClick={handleFormDisplay}>
                <span />
                <p>Add Article</p>
            </button>
            <FormArticle
                handleSubmit={handleArticleSubmit}
                handleChange={handleArticleChange}
                loading={loading}
                article={selectedArticle}
            />
        </section>
        <h3>Type1</h3>
        <section>
            <article>
                <span />
                <p>type11</p>
            </article>
            <article>
                <span />
                <p>type12</p>
            </article>
        </section>
        <h3>Type2</h3>
        <section>
            <article>
                <span />
                <p>type21</p>
            </article>
            <article>
                <span />
                <p>type22</p>
            </article>
        </section>
    </div>
  )
}
