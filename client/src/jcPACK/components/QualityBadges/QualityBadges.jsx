import './QualityBadges.scss'
import React from 'react'

import food from './../../../assets/images/icons/restaurantIcons/food.png'
import chicken from './../../../assets/images/icons/restaurantIcons/chicken.png'
import wine from './../../../assets/images/icons/restaurantIcons/wine.png'
import service from './../../../assets/images/icons/restaurantIcons/service.png'
import terrace from './../../../assets/images/icons/restaurantIcons/terrace.png'
import cheff from './../../../assets/images/icons/restaurantIcons/cheff.png'

export default function QualityBadges() {
  return (
    <section className='QualityBadges'>
        <article>
            <figure style={{backgroundImage: `url(${food})`}} />
            <h4>Excellent cuisine</h4>
            <p>Our menu features exquisite cuisine crafted with the finest ingredients, ensuring a dining experience that is second to none</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${chicken})`}} />
            <h4>Delicious grilled chicken</h4>
            <p> Our succulent, charcoal-grilled chicken is a true culinary masterpiece, and has become synonymous with excellence</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${wine})`}} />
            <h4>Refined wine selection</h4>
            <p>Experience our carefully curated wine list, featuring the very best vintages from around the world</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${service})`}} />
            <h4>Impeccable service</h4>
            <p>Let our friendly and knowledgeable staff provide you with an unforgettable dining experience, characterized by attentive and personalized service</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${terrace})`}} />
            <h4>Enchanting terrace space</h4>
            <p>Relax and unwind in our charming outdoor seating area, a serene and picturesque oasis</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${cheff})`}} />
            <h4>Exceptional quality</h4>
            <p>Discover our commitment to uncompromising quality, reflected in every dish we prepare and every ingredient we use</p>
        </article>
    </section>
  )
}
