import './FormArticle.scss'
import React from 'react'
import FileUpload from '../../../../../../components/FileUpload/FileUpload'
import SelectionBox from '../SelectionBox/SelectionBox'
import { useEffect } from 'react'

export default function FormArticle({
    operation = "Add",
    loading = false,
    setLoading = (f)=>f,
    handleFormDisplayToggle = (f)=>f,
    inputError = "",
    setInputError = (f)=>f,
    
    handleArticleSubmit = (f)=>f,
    handleArticleChange = (f)=>f,
    
    setInputArticle = (f)=>f,
    inputArticle= {
        label: '',
        type: '',
        family: '',
        code: '',
        url: '',
        about: '',
        abbr: '',
        brand: '',
        supplier: '',
        supplierRef: '',
        notes: '',
        price_purchase: '',
        price_sale: '',
        images: [],
        services: [],
        related_codes: [],
        related_families: [],
        related_articles: []
    },
    optionsArticle= {
        code: '',
        label: '',
        type: '',
        family: '',
        url: '',
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
    }
}) {

    const articleOptions= [
        {
            name: "document_blank",
            value: "document_blank"
        },
        {
            name: "product",
            value: "product"
        },
        {
            name: "images",
            value: "images"
        }
    ]

    function handleArticleSubmitMiddleWare(e){
        e?.preventDefault();

        let flag = "";
        if(inputArticle?.type === "document_blank"){
            if(!inputArticle.url)
                flag= "an url path to the document";
        }else if(inputArticle?.type === "product"){
            if(inputArticle.images.length > 0)
                flag= "an image";
        }
        setInputError(flag);

        if(!flag){
            handleArticleSubmit();
        }
    }
  return (
    <form id='FormArticle' className='displayNone' 
        onSubmit={handleArticleSubmitMiddleWare}>
        <span data-form-id="FormArticle" className="close" onClick={handleFormDisplayToggle}>X</span>
        <h3>{operation} article</h3>
        <div className="group">
            {optionsArticle.label !=="null" && 
            <section disabled={optionsArticle.label || loading}>
                <label htmlFor="label">*Label</label>
                <input
                    type="text"
                    name="label"
                    value={optionsArticle.label ? optionsArticle.label : inputArticle.label}
                    onChange={handleArticleChange}
                    placeholder='label'
                    disabled={optionsArticle.label || loading}
                />
            </section>}
            {optionsArticle.type !=="null" && 
            <section disabled={optionsArticle.type || loading}>
                <label htmlFor="standard-select">*Type</label>
                {/* <input
                    type="text"
                    name="type"
                    value={optionsArticle.type ? optionsArticle.type : inputArticle.type}
                    onChange={handleArticleChange}
                    placeholder='type'
                    disabled={optionsArticle.type || loading}
                /> */}
                <SelectionBox 
                    options={articleOptions}
                    name="type" 
                    inputArticle={inputArticle}
                    setInputArticle={setInputArticle}
                    disabled={optionsArticle.type || loading}
                />
            </section>}
            {optionsArticle.family !=="null" && 
            <section disabled={optionsArticle.family || loading}>
                <label htmlFor="family">*Family</label>
                <input
                    type="text"
                    name='family'
                    value={optionsArticle.family ? optionsArticle.family : inputArticle.family}
                    onChange={handleArticleChange}
                    placeholder='family'
                    disabled={optionsArticle.family || loading}
                />
            </section>}
            {optionsArticle.url !=="null" && 
            <section disabled={optionsArticle.url || loading}>
                <label htmlFor="url">
                    {inputArticle?.type == "document_blank" && "*"}
                    Url</label>

                <input
                    type="text"
                    name='url'
                    value={optionsArticle.url ? optionsArticle.url : inputArticle.url}
                    onChange={handleArticleChange}
                    placeholder='url'
                    disabled={optionsArticle.url || loading}
                />
            </section>}
        </div>
        <div className="group">
        {optionsArticle.code !=="null" && 
            <section disabled={optionsArticle.code || loading}>
                <label htmlFor="code">Code</label>
                <input type="text"
                    name='code'
                    value={optionsArticle.code ? optionsArticle.code : inputArticle.code}
                    onChange={handleArticleChange}
                    placeholder='code'
                    disabled={optionsArticle.code || loading}
                />
            </section>}
            {optionsArticle.about !=="null" && 
            <section disabled={optionsArticle.about || loading}>
                <label htmlFor="about">About</label>
                <input type="text"
                    name='about'
                    value={optionsArticle.about ? optionsArticle.about : inputArticle.about}
                    onChange={handleArticleChange}
                    placeholder='about'
                    disabled={optionsArticle.about || loading}
                />
            </section>}
            {optionsArticle.abbr !=="null" &&
            <section disabled={optionsArticle.abbr || loading}>
                <label htmlFor="abbr">Abbr</label>
                <input type="text"
                    name='abbr'
                    value={optionsArticle.abbr ? optionsArticle.abbr : inputArticle.abbr}
                    onChange={handleArticleChange}
                    placeholder='abbr'
                    disabled={optionsArticle.abbr || loading}
                />
            </section>}
            {optionsArticle.brand !=="null" &&
            <section disabled={optionsArticle.brand || loading}>
                <label htmlFor="brand">Brand</label>
                <input type="text"
                    name='brand'
                    value={optionsArticle.brand ? optionsArticle.brand : inputArticle.brand}
                    onChange={handleArticleChange}
                    placeholder='brand'
                    disabled={optionsArticle.brand || loading}
                />
            </section>}
            {optionsArticle.supplier !=="null" &&
            <section disabled={optionsArticle.supplier || loading}>
                <label htmlFor="supplier">Supplier</label>
                <input type="text"
                    name='supplier'
                    value={optionsArticle.supplier ? optionsArticle.supplier : inputArticle.supplier}
                    onChange={handleArticleChange}
                    placeholder='supplier'
                    disabled={optionsArticle.supplier || loading}
                />
            </section>}
            {optionsArticle.supplierRef !=="null" &&
            <section disabled={optionsArticle.supplierRef || loading}>
                <label htmlFor="supplierRef">SupplierRef</label>
                <input type="text"
                    name='supplierRef'
                    value={optionsArticle.supplierRef ? optionsArticle.supplierRef : inputArticle.supplierRef}
                    onChange={handleArticleChange}
                    placeholder='supplierRef'
                    disabled={optionsArticle.supplierRef || loading}
                />
            </section>}
            {optionsArticle.notes !=="null" &&
            <section disabled={optionsArticle.notes || loading}>
                <label htmlFor="notes">Notes</label>
                <input type="text"
                    name='notes'
                    value={optionsArticle.notes ? optionsArticle.notes : inputArticle.notes}
                    onChange={handleArticleChange}
                    placeholder='notes'
                    disabled={optionsArticle.notes || loading}
                />
            </section>}
            {optionsArticle.price_purchase !=="null" &&
            <section disabled={optionsArticle.price_purchase || loading}>
                <label htmlFor="price_purchase">Purchase price</label>
                <input type="text"
                    name='price_purchase'
                    value={optionsArticle.price_purchase ? optionsArticle.price_purchase : inputArticle.price_purchase}
                    onChange={handleArticleChange}
                    placeholder='purchase price'
                    disabled={optionsArticle.price_purchase || loading}
                />
            </section>}
            {optionsArticle.price_sale !=="null" &&
            <section disabled={optionsArticle.price_sale || loading}>
                <label htmlFor="price_sale">Sale price</label>
                <input type="text"
                    name='price_sale'
                    value={optionsArticle.price_sale ? optionsArticle.price_sale : inputArticle.price_sale}
                    onChange={handleArticleChange}
                    placeholder='sale price'
                    disabled={optionsArticle.price_sale || loading}
                />
            </section>}
        </div>
        <FileUpload
            values={inputArticle}
            setValues={setInputArticle}
            loading={loading}
            setLoading={setLoading}    
        />
        <span className='formError'>{inputError && 
            <p>{`Please add ${inputError}`}</p>}
        </span>
        <button type="submit"
            disabled={loading}
        >{operation} article</button>
    </form>
  )
}
