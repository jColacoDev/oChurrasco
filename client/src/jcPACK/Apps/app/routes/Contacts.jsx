import React from 'react'
import ContactForm from '../../../components/ContactForm/ContactForm'
import ContactsSection from '../../../components/ContactsSection/ContactsSection'

export default function Contacts() {
  return (
    <div className='Contacts'>
        <h2>Contactos</h2>
        <main>
            <ContactForm />   
            <div>
                <ContactsSection />
                <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.9976755967095!2d-9.217642384857141!3d38.740815563764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecce65736f85f%3A0x994ef24fd0907ebb!2sErgoface%20Mobili%C3%A1rio%20de%20Escrit%C3%B3rio%20e%20Projetos!5e0!3m2!1spt-PT!2spt!4v1677294340669!5m2!1spt-PT!2spt" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </main>
    </div>
  )
}
