//Footer.jsx
import './footer.scss'; 
import React from "react";
import { Link } from "react-router-dom";
import { appData } from "../../Apps/app/App";
import ContactsSection from '../ContactsSection/ContactsSection';

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
            <ContactsSection />
            <article>
                <h3>A empresa</h3>
                <Link to={`/app/sobre-nos`}>Sobre Nós</Link>
                <Link to={`/app/contactos`}>Contactos</Link>
                <Link to={`/app/faq`}>FAQ</Link>
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