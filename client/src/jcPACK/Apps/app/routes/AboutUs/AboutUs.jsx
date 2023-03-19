import React from 'react'
import PhotoGallery from '../../../../components/PhotoGallery/PhotoGallery'
import { useTranslation, Trans } from 'react-i18next';

export default function AboutUs() {
  return (
    <div className='AboutUs'>
        <h2>About us</h2>
        <section>
            <div className='parallax'>
                <figure />
            </div>
            <div>
                <p>
                Welcome to our classic restaurant in Lisbon, where our specialty is the delicious charcoal-grilled chicken barbecue. Our restaurant is steeped in history and offers top-notch service with experienced staff who have been with us for years. Our magnificent outdoor terrace is the perfect place to enjoy your meal while taking in the vibrant energy of Lisbon.
                </p><p>
                Specializing in grilled dishes from Rua das Portas de Santo Antão, we pride ourselves on serving some of the best roasted and spit-roasted chicken in Lisbon. Our attentive staff dressed in traditional attire will ensure you receive your desired portion and keep the rest warm for you to enjoy. You can choose between thinly sliced or round-cut potatoes and select from a variety of dishes such as Indian-style curry or Viana-style cod, both of which are award-winning. We are the perfect choice for those looking for an authentic dining experience in Portas de Santo Antão.
                </p><p>
                At our restaurant, we aim to provide our customers with a warm and intimate dining experience while maintaining a professional standard. Whether you're a local or a tourist, we guarantee that you'll have an unforgettable meal with us. So come and join us, and taste the best grilled chicken in Lisbon!
                </p>
            </div>
        </section>
        <PhotoGallery />   
    </div>
  )
}
