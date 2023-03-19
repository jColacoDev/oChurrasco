import './TopNotes.scss'
import React from 'react'
import { appData } from '../../Apps/app/App'

export default function TopNotes() {
  return (
    <section className='TopNotes'>
    <article>
        <p>Bem-vindo ao <strong>Churrasco</strong></p>
        <a href="tel:+351919224090"><figure className='mobile'/>{appData.data.tel}</a>
    </article>
    <article>
        <a href="tel:+351217540421"><figure className='phone'/>{appData.data.tel}</a>
        <a href = "mailto:geral@ergoface-lda.com?subject = webMail&body = Message"><figure className='email'/>{appData.data.email}
        </a>
    </article>
</section>
  )
}
