import './SelectionBox.scss'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function SelectionBox({
    options= [],
    name= "SelectionBox",
    disabled= false, 
    inputArticle= {}, 
    setInputArticle= (f)=>f,
}) {

    const [selectedOption, setSelectedOption] = useState("");
    const ulRef= useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setInputArticle({...inputArticle, [name]: selectedOption.value});
    }, [selectedOption]);

    useEffect(() => {
        let option = options.filter((option)=> option.value === inputArticle[name])[0]
        !option && setSelectedOption("");
    }, [inputArticle]);
    
    function handleClickOutside(event) {
        if (ulRef.current && 
            !ulRef.current.contains(event.target) &&
            ulRef.current.classList.contains('focus')
            ) {
            ulRef.current.classList.remove('focus')
        }
    }
    
    const handleOptionsToggle = ()=>{
        ulRef.current?.classList.toggle('focus')
    }

    const handleLiClick = (option)=>{
        setSelectedOption(option);
    }

  return (
    <div className='SelectionBox'
        onClick={handleOptionsToggle}
    >
        <span
            name={name} 
            disabled={disabled}
            value={selectedOption?.value}
            
            onChange={(f)=>f}
        >{selectedOption.name}</span>
        <ul ref={ulRef}>
            {options.map(option =>
                <li key={option.value} value={option.value}
                    onClick={()=>handleLiClick(option)}
                >{option.name}</li>
            )}
        </ul>
    </div>
  )
}
