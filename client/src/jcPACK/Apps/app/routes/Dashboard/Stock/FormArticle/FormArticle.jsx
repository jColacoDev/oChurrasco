import './FormArticle.scss'
import React from 'react'

export default function FormArticle({
    handleSubmit = (f)=>f,
    handleChange = (f)=>f,
    loading = false,
    article= {
        general: {
            code: '',
            label: '',
            type: '',
            family: '',
            abbr: '',
            about: '',
            brand: '',
            supplier: '',
            supplierRef: '',
            notes: '',
        },
        price: {
            purchase: '',
            sale: ''
        },
        services: [],
        related: {
            codes: [],
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
}) {
  return (
    <form className='FormArticle' onSubmit={handleSubmit}>
        <section>
            {<section>
                <label htmlFor="code">Code</label>
                <input type="text"
                    name='code'
                    value={article.general.code ? article.general.code : ""}
                    onChange={handleChange}
                    placeholder='code'
                    disabled={loading}
                />
            </section>}
            {<section>
                <label htmlFor="label">Label</label>
                <input type="text"
                    name='label'
                    value={article.general.label ? article.general.label : ""}
                    onChange={handleChange}
                    placeholder='label'
                    disabled={loading}
                />
            </section>}
            {<section>
                <label htmlFor="label">about</label>
                <input type="text"
                    name='about'
                    value={article.general.about ? article.general.about : ""}
                    onChange={handleChange}
                    placeholder='about'
                    disabled={loading}
                />
            </section>}
            {<section>
                <label htmlFor="label">family</label>
                <input type="text"
                    name='family'
                    value={article.general.family ? article.general.family : ""}
                    onChange={handleChange}
                    placeholder='family'
                    disabled={loading}
                />
            </section>}
        </section>
        <button type="submit"
            disabled={loading}
        >Submit</button>
    </form>
  )
}
