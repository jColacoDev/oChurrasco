import './ContactsSection.scss'
import React from 'react'
import { appData } from '../../Apps/app/App'

export default function ContactsSection() {
  return (
    <div className='ContactsSection'>
        <h3>Contacts</h3>
        <section className='links'>
            <a href="tel:+351217540421"><figure className='phone'/>Tel: {appData.data.tel}</a>
            <a href="tel:+351919224090"><figure className='mobile'/>Tlm: {appData.data.tel}</a>
            <a href = "mailto:online@ergoface-lda.com?subject=consulta_online"><figure className='email' />E-mail: {appData.data.email}
            </a>
            <a href="https://ergoface-lda.com"><figure className='web'/>https://o-churrasco.pt</a>
        </section>    
        <span>
            <figure className="location" />
            <p>
            {appData.data.address}, <br />
            {appData.data.pCode}, Portugal <br />
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
