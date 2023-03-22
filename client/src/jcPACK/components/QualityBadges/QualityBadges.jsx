import './QualityBadges.scss'
import React, { useEffect } from 'react'

import img_food from './../../../assets/images/icons/restaurantIcons/food.png'
import img_chicken from './../../../assets/images/icons/restaurantIcons/chicken.png'
import img_wine from './../../../assets/images/icons/restaurantIcons/wine.png'
import img_service from './../../../assets/images/icons/restaurantIcons/service.png'
import img_terrace from './../../../assets/images/icons/restaurantIcons/terrace.png'
import img_cheff from './../../../assets/images/icons/restaurantIcons/cheff.png'

// Translations
import { useTranslation } from 'react-i18next';

export default function QualityBadges() {
    const { t } = useTranslation();
    const qualityBadgesData = t("qualityBadgesData", { returnObjects: true });

    const qualityBadgesImages= [
        img_food,
        img_chicken,
        img_wine,
        img_service,
        img_terrace,
        img_cheff,
    ]
  return (
    <section className='QualityBadges'>
        {qualityBadgesData?.map((badge, i)=>
        <article key={i}>
            <figure style={{backgroundImage: `url(${qualityBadgesImages[i]})`}} />
            <h4>{badge.title}</h4>
            <p>{badge.text}</p>
        </article>
        )}

    </section>
  )
}
