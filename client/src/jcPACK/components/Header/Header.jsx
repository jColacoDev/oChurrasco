import './Header.scss'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productsData } from '../../Apps/app/Products'
import { removeAccents } from '../../utils/utils'

export default function Header() {
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        // console.log(navigate.path)
        const category = `${location.pathname.split('/')[3] || ""}`
        const final_category = `${location.pathname.split('/')[4] || ""}`

        setCategory(category);
    },[navigate])

  return (
    <header className='Header'>
        <section className='welcome'>
            <p>Bem-vindo à <strong>Ergoface</strong></p>
            <article>
                <a href = "mailto:geral@ergoface-lda.com?subject = webMail&body = Message">geral@ergoface-lda.com
                </a>
                <a href="tel:+351217540421">21 754 04 21</a>
                <a href="tel:+351919224090">91 922 40 90</a>
            </article>
        </section>
        <main>
            <figure className='logo'></figure>
        </main>
        <hr />
        <nav>
            {productsData.categories.map((item, i)=>
                <Link key={i} 
                    to={`/app/produtos/${removeAccents(item.label.replace(/\s+/g, '-').toLowerCase())}`}
                    className={removeAccents(item.label.replace(/\s+/g, '-').toLowerCase()) === category ? "active" : ""}
                >{item.label}</Link>
            )}
        </nav>
        <hr />
    </header>
  )
}
