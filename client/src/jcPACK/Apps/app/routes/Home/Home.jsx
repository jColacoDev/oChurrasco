import './Home.scss'
import React from 'react'
import ChurrascoLogo from '../../../../components/ChurrascoLogo/ChurrascoLogo'
import Opinions from '../../../../components/Opinions/Opinions'
import PhotoGallery from '../../../../components/PhotoGallery/PhotoGallery'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div className='Home'>
      <div className="parallax">
        <figure />
        <figcaption>
          <ChurrascoLogo flames={false} />
        </figcaption>
      </div>

      <h2>
      Savor the Art of Charcoal-Grilled Chicken at Our Elegant Downtown Lisbon Restaurant
      </h2>

      <main>
        <section className="menus">
          <article>
            <h3>Menu</h3>
            <div>
              <p>
              Experience charcoal-grilled perfection and indulge in our delicious chicken specialty at our downtown Lisbon restaurant. From succulent pork medallions to must-try seafood dishes like grilled octopus and Portuguese-style "Bacalhau," our menu offers a variety of flavors to satisfy your cravings. Don't forget to pair your meal with our house wine, available in various sizes. Click below to see our full menu and savor the taste of our expertly crafted dishes.
              </p>
              <Link to={`/app/menu`}>Menu</Link>
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
              <h3>Reservations</h3>
              <div>
                <p>
                Come experience the mouthwatering aromas of our specialty dishes at our cozy downtown Lisbon restaurant. Our outdoor terrace, nestled in an original old-fashioned building, provides the perfect atmosphere for a delightful dining experience. Savor our expertly crafted charcoal-grilled chicken, seafood dishes, and cooked meats, and immerse yourself in a charming and peaceful environment. Book your reservations now and join us for an unforgettable culinary journey.
                </p>
                <Link to={`/app/reservation`}>Reserve a table</Link>
              </div>
            </article>
          </section>
      </main>
      <Opinions />
      <PhotoGallery />
    </div>
  )
}
