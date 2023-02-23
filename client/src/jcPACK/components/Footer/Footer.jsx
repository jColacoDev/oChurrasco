//Footer.jsx
import './footer.scss'; 
import React from "react";
import { Link } from "react-router-dom";
import { appData } from "../../Apps/app/App";

export default function Footer() {
    const portfolioData = appData.routesData[0];
    const cvData = appData.routesData[1];


    function handleTopClick(){
        window.scrollTo(0,0);
    }

    const linksFromRouteData = (routeData) => routeData?.navLinks.map((link)=>
    <Link key={link.ref} to={{
        pathname:`${appData.path}${routeData.path}`,
        hash:link.ref
    }}>{link.label}</Link>
)

    return (
        <footer className="appFooter">
            <article>
                <h3>Ergoface - Mobiliário de Escritório, Lda.</h3>
                <section className='links'>
                    <a href="tel:+351217540421"><figure className='phone'/>Tel: 21 754 04 21</a>
                    <a href="tel:+351919224090"><figure className='mobile'/>Tlm: 91 922 40 90</a>
                    <a href = "mailto:geral@ergoface-lda.com?subject = webMail&body = Message"><figure className='email' />E-mail: geral@ergoface-lda.com
                    </a>
                    <a href="ergoface-lda.com"><figure className='web'/>www.ergoface-lda.com</a>
                </section>    
                <h3>Escritório</h3>
                <span>
                    <figure className="location" />
                    <p>
                        Rua Dr. Francisco Sousa Tavares n9A, <br />
                        2720-198 Amadora, Portugal <br />
                    </p>
                </span>
                <h3>Horários</h3>
                <span>
                    <figure className="calendar" />
                    <p>
                        Segunda a Sexta: 08:00h-19:00h <br />        
                        Sábados: 09:00h-13:00h 
                    </p>
                </span>
            </article>
            <article>
                <h3>Empresa</h3>
                <Link>Sobre Nós</Link>
                <Link>Contactos</Link>
                <Link>FAQ</Link>
                <Link onClick={handleTopClick}>
                    <figure className='ergologo'/>
                    <figcaption>
                        All Rights Reserved <br/>
                        © {new Date().getFullYear()} ergoface-lda.com<br/>
                    </figcaption>
                </Link>
            </article>
        </footer>
    );
}