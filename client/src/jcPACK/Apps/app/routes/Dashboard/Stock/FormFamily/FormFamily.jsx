import './FormFamily.scss'
import './select.scss'
import React from 'react'
import FileUpload from '../../../../../../components/FileUpload/FileUpload'

export default function FormFamily({
    operation = "Add",
    inputError = "",
    loading = false,
    setLoading = (f)=>f,
    handleFormDisplayToggle = (f)=>f,

    handleFamilySubmit = (f)=>f,
    handleFamilyChange = (f)=>f,
    
    setInputFamily = (f)=>f,
    inputFamily= {
        label: '',
        family: '',
        images: []
    },
    optionsFamily= {
        label: '',
        family: '',
        images: []
    },
}) {
  return (
    <form id="FormFamily" className='displayNone' onSubmit={handleFamilySubmit}>
        <span data-form-id="FormFamily" className="close" onClick={handleFormDisplayToggle}>X</span>
        <h3>{operation} family</h3>
        {optionsFamily.label !=="null" &&
        <section disabled={optionsFamily.label || loading}>
            <label htmlFor="label">*Label</label>
            <input
                type="text" 
                disabled={optionsFamily.label || loading}
                value={optionsFamily.label ? optionsFamily.label : inputFamily.label}
                onChange={handleFamilyChange} 
                name='label' 
                placeholder='label'
            />
        </section>}
        {optionsFamily.family !=="null" &&
        <section disabled={optionsFamily.family || loading}>
            <label htmlFor="family">Family</label>
            <input
                name="family" 
                id="family" 
                disabled={optionsFamily.family || loading}
                value={optionsFamily.family ? optionsFamily.family : inputFamily.family}
                placeholder='family' 
                onChange={handleFamilyChange}
            />
        </section>}
        <FileUpload
            values={inputFamily}
            setValues={setInputFamily}
            loading={loading}
            setLoading={setLoading}    
        />
        <span className='formError'>{inputError && 
            <p>{`Please add ${inputError}`}</p>}
        </span>
        <button type="submit"
            disabled={loading}
        >{operation} family</button>
    </form>
  )
}
