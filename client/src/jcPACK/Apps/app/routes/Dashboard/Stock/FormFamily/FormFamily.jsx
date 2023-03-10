import './FormFamily.scss'
import React from 'react'
import { useEffect } from 'react'
import FileUpload from '../../../../../../components/FileUpload/FileUpload'

export default function FormFamily({
    handleFamilySubmit = (f)=>f,
    handleFamilyChange = (f)=>f,
    setLoading = (f)=>f,
    loading = false,
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
    <form className='FormFamily displayNone' onSubmit={handleFamilySubmit}>
        <section disabled={optionsFamily.label || loading}>
            <label htmlFor="label">Label</label>
            <input required type="text" 
                disabled={optionsFamily.label || loading}
                value={optionsFamily.label ? optionsFamily.label : inputFamily.label}
                onChange={handleFamilyChange} 
                name='label' 
                placeholder='label'
            />
        </section>
        <section disabled={optionsFamily.family || loading}>
            <label htmlFor="family">Family</label>
            <input required 
                list="families" 
                name="family" 
                id="family" 
                disabled
                value={optionsFamily.family ? optionsFamily.family : inputFamily.family}
                placeholder='family' 
                onChange={handleFamilyChange}
            />
        </section>
        <FileUpload
            values={inputFamily}
            setValues={setInputFamily}
            loading={loading}
            setLoading={setLoading}    
        />
        <button type="submit"
            disabled={loading}
        >Submit</button>
    </form>
  )
}
