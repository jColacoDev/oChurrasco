import './ContactsSection.scss'
import React from 'react'
import { appData } from '../../Apps/app/App'
import { stringRemoveSpaces } from '../../utils/utils'

export default function ContactsSection() {
  return (
    <div className='ContactsSection'>
        <h3>Contacts</h3>
        <section className='links'>
            {appData.contactsData.phone &&
                <a href={`tel:+351${stringRemoveSpaces(appData.contactsData.phone)}`}><figure className='phone'/>Tel: {appData.contactsData.phone}</a>
            }
            {appData.contactsData.mobile &&
                <a href={`tel:+351${stringRemoveSpaces(appData.contactsData.mobile)}`}><figure className='mobile'/>Tlm: {appData.contactsData.mobile}</a>
            }
            {appData.contactsData.email &&
                <a href = {`mailto:${appData.contactsData.email}?subject=consulta_online`} ><figure className='email' />E-mail: {appData.contactsData.email}
                </a>
            }
            {appData.contactsData.web &&
                <a href={`${appData.contactsData.web}`}><figure className='web'/>{appData.contactsData.web}</a>
            }
        </section>    
        <span>
            <figure className="location" />
            <p>
            {appData.contactsData.address}, <br />
            {appData.contactsData.pCode}, {appData.contactsData.country} <br />
            </p>
        </span>
        <span>
            <figure className="calendar" />
            <p>Todos os dias <br />
                12:00–16:30h, 18:30–23:30h
            </p>
        </span>
    </div>
  )
}
