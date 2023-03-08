import './Stock.scss'
import React from 'react'
import FormFamily from './FormFamily/FormFamily'
import FormArticle from './FormArticle/FormArticle';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FAMILY_CREATE } from '../../../../../graphql/mutations';

export default function Stock() {

    const [loading, setLoading] = useState(false);
    
    const [selectedFamily, setSelectedFamily] = useState({
        label: '',
        image: '',
        family: ''
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

    const [familyCreate] = useMutation(FAMILY_CREATE)


    const handleFamilySubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(selectedFamily)
        familyCreate({variables: {input: selectedFamily}});
        setLoading(false);
    };
    const handleArticleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // articleCreate({variables: {input: selectedArticle}});
        setLoading(false);
    };

    const handleFamilyChange = (e) => {
        setSelectedFamily({...selectedFamily, [e.target.name]: e.target.value})
    };
    const handleArticleChange = (e) => {
        setSelectedArticle({...selectedArticle, [e.target.name]: e.target.value})
    };
    const handleFormDisplay = (e) =>{
        e.preventDefault();
        let form = e.currentTarget.parentElement.querySelector('form')
        form?.classList.toggle('displayNone')
    }

    return (
      <div className='Stock'>
        <span>Inicio - Mobiliario - Recepção</span>
        <h2>Familia de Artigos</h2>
        <section className='submitForm'>
            <button onClick={handleFormDisplay}>
                <span />
                <p>Add Family</p>
            </button>
            <FormFamily 
                handleSubmit={handleFamilySubmit}
                handleChange={handleFamilyChange}
                loading={loading}
                family={selectedFamily}
            />
        </section>
        <section>
            <article>
                <span />
                <p>Fam1</p>
            </article>
            <article>
                <span />
                <p>Fam2</p>
            </article>
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
