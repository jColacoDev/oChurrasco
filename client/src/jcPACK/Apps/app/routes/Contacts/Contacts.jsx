import './Contacts.scss'
import React from 'react'
import ContactsSection from '../../../../components/ContactsSection/ContactsSection'
import ContactsFormVintage from '../../../../components/ContactFormVintage/ContactsFormVintage'
import { useTranslation } from 'react-i18next';

export default function Contacts() {
  const { t } = useTranslation();
  const routesData = t("routesData", { returnObjects: true });

  return (
    <div className='Contacts backgroundFixed chickenChicks'>
        <h2>{routesData.contacts}</h2>
        <main>
            <ContactsFormVintage />   
            <div>
                <ContactsSection />
                {/* <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.9976755967095!2d-9.217642384857141!3d38.740815563764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecce65736f85f%3A0x994ef24fd0907ebb!2sErgoface%20Mobili%C3%A1rio%20de%20Escrit%C3%B3rio%20e%20Projetos!5e0!3m2!1spt-PT!2spt!4v1677294340669!5m2!1spt-PT!2spt" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <div className="map-responsive">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12452.283855267495!2d-9.1405638!3d38.7161797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933812eb63bb5%3A0x254c12266a7a5ed2!2sO%20Churrasco!5e0!3m2!1spt-PT!2spt!4v1679146553625!5m2!1spt-PT!2spt" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </main>
    </div>
  )
}
