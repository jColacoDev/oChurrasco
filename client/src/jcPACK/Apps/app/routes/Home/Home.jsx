import './Home.scss'
import React, { useEffect, useState } from 'react'
import Gallery from '../../../../components/Gallery/Gallery'
import { productsData } from '../../Products'
import ContactForm from '../../../../components/ContactForm/ContactForm'
import GalleryCaroussel from '../../../../components/GalleryCaroussel/GalleryCaroussel'
import SubscribeBox from '../../../../components/SubscribeBox/SubscribeBox'
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    console.log(lang)
    i18n.changeLanguage(lang);
  };

  return (
    <div className='Home'>
    {/* <button onClick={() => handleLanguageChange('pt')}>Português</button>
    <button onClick={() => handleLanguageChange('en')}>English</button> */}

        <span className='heading'>
            {/* <h3>{t('products')}</h3> */}
            <h3>Produtos</h3>
            <hr />
        </span>
        <Gallery url="/app/produtos" data={productsData.categories} />
        
        <span className='heading'>
            <h3>Destaques</h3>
            <hr />
        </span>
        <GalleryCaroussel url="/app/produtos" data={productsData.categories} />
        
        <section className="landingGreeting">
          <p>
          Bem-vindo à Ergoface mobiliário de escritório! Temos o compromisso de fornecer produtos de alta qualidade e acreditamos que a nossa dedicação à excelência nos destaca da concorrência. A nossa equipa de entregas irá entregar diretamente na sua empresa com a nossa viatura, e os nossos instaladores especializados irão garantir que o mobiliário seja montado corretamente. Oferecemos uma garantia em todos os nossos produtos e a nossa equipa de suporte está sempre disponível para ajudar com quaisquer dúvidas ou problemas. Contacte-nos hoje para um orçamento gratuito e subscreva a nossa newsletter para se manter atualizado sobre os nossos últimos produtos e promoções.
          </p>
        </section>
        <span className='heading'>
            <h3>Contactos</h3>
            <hr />
        </span>
        <section className='homeContacts'>
          <ContactForm />
          <SubscribeBox />
        </section>
    </div>
  )
}
