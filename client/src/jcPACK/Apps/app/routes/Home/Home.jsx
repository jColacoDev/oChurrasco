import './Home.scss'
import React from 'react'
import ChurrascoLogo from '../../../../components/ChurrascoLogo/ChurrascoLogo'
import Opinions from '../../../../components/Opinions/Opinions'
import PhotoGallery from '../../../../components/PhotoGallery/PhotoGallery'
import { Link } from 'react-router-dom'
import { appData } from '../../App'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();
  const homeData = t("homeData", { returnObjects: true });
  const routesData = t("routesData", { returnObjects: true });
  
  return (
    <div className='Home'>
      <div className="parallax">
        <figure />
        <figcaption>
          <ChurrascoLogo flames={false} />
        </figcaption>
      </div>

      <h2>{homeData.firstTitle}</h2>

      <main>
        <section className="menus">
          <article>
            <h3>{routesData.menu}</h3>
            <div>
              <p>{homeData.menuText}</p>
              <Link to={`${appData.path}/menu`}>{routesData.menu}</Link>
            </div>
          </article>
          <article>
            <figure></figure>
          </article>
          </section>
  
          <section className='reservations'>
            <article>
              <figure></figure>
            </article>
            <article>
              <h3>{routesData.reservation}</h3>
              <div>
                <p>{homeData.reservationsText}</p>
                <Link to={`${appData.path}/reservation`}>{routesData.reservation}</Link>
              </div>
            </article>
          </section>
      </main>
      <Opinions />
      <PhotoGallery />
    </div>
  )
}
