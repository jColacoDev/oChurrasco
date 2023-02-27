import './ContactsSection.scss'
import React from 'react'

export default function ContactsSection() {
  return (
    <div className='ContactsSection'>
        <h3><span>Ergoface-</span><span>Mobiliário de Escritório, Lda.</span></h3>
        <section className='links'>
            <a href="tel:+351217540421"><figure className='phone'/>Tel: 21 754 04 21</a>
            <a href="tel:+351919224090"><figure className='mobile'/>Tlm: 91 922 40 90</a>
            <a href = "mailto:online@ergoface-lda.com?subject=consulta_online"><figure className='email' />E-mail: geral@ergoface-lda.com
            </a>
            <a href="https://ergoface-lda.com"><figure className='web'/>https://ergoface-lda.com</a>
        </section>    
        <span>
            <figure className="location" />
            <p>
                Rua Dr. Francisco Sousa Tavares n9A, <br />
                2720-198 Amadora, Portugal <br />
            </p>
        </span>
        <span>
            <figure className="calendar" />
            <p>
                Segunda a Sexta: 08:00h-19:00h <br />        
                Sábados: 09:00h-13:00h 
            </p>
        </span>
    </div>
  )
}
