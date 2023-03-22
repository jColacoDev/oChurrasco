import './Community.scss'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Community() {
    const { t } = useTranslation();
    const routesData = t("routesData", { returnObjects: true });
    const communityData = t("communityData", { returnObjects: true });

  return (
    <div className='Community backgroundFixed chickenChicks'>
        <h2>{routesData.community}</h2>

        <section className='messageInit'>
            <figure />
            <p>
            {communityData.communityParagraphs?.map((p,i)=>
                <>
                    <br />
                    <span key={i}>{p}</span>
                </>
            )}
            </p>
        </section>
        <section className='figures'>
            <div className="avals">
                <figure className="avaliations" />
                <figure className="moreAval" />
            </div>

            <figure className='restaurantGuru'>
                <figcaption>
                <a target="_blank" rel="noopener noreferrer"
                    href="https://pt.restaurantguru.com/O-Cantinho-Lisbon-2">
                        https://pt.restaurantguru.com
                </a>
                </figcaption>
            </figure>
            <figure className='timeOut'>
                <figcaption>
                <a target="_blank" rel="noopener noreferrer"
                    href="https://www.timeout.pt/lisboa/pt/restaurantes/o-churrasco">
                        https://www.timeout.pt
                </a>
                </figcaption>
            </figure>
            <figure className='backstreets'>
                <figcaption>
                <a target="_blank" rel="noopener noreferrer"
                    href="https://culinarybackstreets.com/cities-category/lisbon/2021/o-churrasco-2/">
                        https://culinarybackstreets.com
                </a>
                </figcaption>
            </figure>
            <figure className='comercioComHistoria'>
                <figcaption>
                <a target="_blank" rel="noopener noreferrer"
                    href="https://www.comerciocomhistoria.gov.pt/listings/restaurante-o-churrasco-3685/">
                        https://www.comerciocomhistoria.gov.pt
                </a>
                </figcaption>
            </figure>
            <figure className='VNG'>
                <figcaption>
                <a target="_blank" rel="noopener noreferrer"
                    href="http://www.virgiliogomes.com/index.php/restaurantes/127-o-churrasco">
                        http://www.virgiliogomes.com
                </a>
                </figcaption>
            </figure>
            <figure className='tripAdvisor'>
                <figcaption>
                <a target="_blank" rel="noopener noreferrer"
                    href="https://www.tripadvisor.co/Restaurant_Review-g189158-d1884238-Reviews-Restaurante_O_Churrasco-Lisbon_Lisbon_District_Central_Portugal.html">
                        https://www.tripadvisor.co
                </a>
                </figcaption>
            </figure>
            <figure className='foursquare'>
                <figcaption>
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://pt.foursquare.com/v/o-churrasco/4d53e752f9f9b60cfa4728e6?tasteId=53dc4ee5498ea1993c79b17d">
                            https://pt.foursquare.com
                    </a>
                </figcaption>
            </figure>
            <figure className='yelp'>
                <figcaption>
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://www.yelp.com/biz/restaurante-o-churrasco-lisboa-2">
                            https://www.yelp.com
                    </a>
                </figcaption>
            </figure>
            <figure className='lifecooler'>
                <figcaption>
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://lifecooler.com/artigo/comer/restaurante-o-churrasco/330995">
                            https://lifecooler.com
                    </a>
                </figcaption>
            </figure>
        </section>
    </div>
  )
}
