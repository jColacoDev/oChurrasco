import './TopNotes.scss'
import React from 'react'
import { appData } from '../../Apps/app/App'
import { stringRemoveSpaces } from '../../utils/utils'

export default function TopNotes() {
  return (
    <section className='TopNotes'>
    <article>
        <p>Bem-vindo ao <strong>Churrasco</strong></p>
        <a href={`tel:+351${stringRemoveSpaces(appData.contactsData.mobile)}`}><figure className='mobile'/>{appData.contactsData.mobile}</a>
    </article>
    <article>
        <a href={`tel:+351${stringRemoveSpaces(appData.contactsData.phone)}`}><figure className='phone'/>{appData.contactsData.phone}</a>
        <a href={`mailto:${appData.contactsData.email}?subject = webMail&body = Message`}><figure className='email'/>{appData.contactsData.email}
        </a>
    </article>
</section>
  )
}
