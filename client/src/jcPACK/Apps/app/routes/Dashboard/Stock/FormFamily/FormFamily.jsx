import './FormFamily.scss'
import React from 'react'
import { useEffect } from 'react'

export default function FormFamily({
    handleSubmit = (f)=>f,
    handleChange = (f)=>f,
    loading = false,
    family= {
        label: '',
        family: '',
        image: ''
    }
}) {

    useEffect(()=>{
        
    },[])

  return (
    <form className='FormFamily' onSubmit={handleSubmit}>
        <section>
            <label htmlFor="label">Label</label>
            <input required type="text" 
                name='label' 
                value={family.label ? family.label : ""}
                onChange={handleChange} 
                placeholder='label' 
                disabled={loading}
            />
        </section>
        <section>
            <label htmlFor="image">Image</label>
            <input required type="text" 
                name='image' 
                value={family.image ? family.image : ""}
                onChange={handleChange} 
                placeholder='image' 
                disabled={loading}
            />
        </section>
        <section>
            <label htmlFor="family">Family</label>
            <input required type="text" 
                name='family' 
                value={family.family ? family.family : ""}
                onChange={handleChange} 
                placeholder='family' 
                disabled={loading}
            />
        </section>
        <button type="submit"
            disabled={loading}
        >Submit</button>
    </form>
  )
}
