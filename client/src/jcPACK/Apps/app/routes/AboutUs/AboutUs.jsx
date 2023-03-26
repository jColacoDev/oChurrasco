import './AboutUs.scss'
import React from 'react'
import PhotoGallery from '../../../../components/PhotoGallery/PhotoGallery'
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();
  const routesData = t("routesData", { returnObjects: true });
  const aboutUsData = t("aboutUsData", { returnObjects: true });

  return (
    <div className='AboutUs backgroundFixed chickenChicks'>
        <h2>{routesData.aboutUs}</h2>
        <section>
            <div className='parallax'>
                <figure />
            </div>
            <div>
              {aboutUsData.aboutParagraphs.map((p,i)=>
                <p key={i}>{p}</p>
              )}
            </div>
        </section>
        <PhotoGallery />   
    </div>
  )
}
