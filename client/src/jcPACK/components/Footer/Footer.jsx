//Footer.jsx
import './footer.scss'; 
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { appData } from "../../Apps/app/App";
import ContactsSection from '../ContactsSection/ContactsSection';
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../context/authContext';

export default function Footer() {
    const portfolioData = appData.routesData[0];
    const cvData = appData.routesData[1];
    const {state, dispatch} = useContext(AuthContext)
    let navigate = useNavigate();

    function handleTopClick(){
        window.scrollTo(0,0);
    }

    const linksFromRouteData = (routeData) => routeData?.navLinks.map((link)=>
    <Link key={link.ref} to={{
        pathname:`${appData.path}${routeData.path}`,
        hash:link.ref
    }}>{link.label}</Link>
)
const logout = (e) => {
    auth.signOut();
    dispatch({
        type: 'LOGGED_IN_USER',
        payload: null
    });
    navigate('/app')
}
    return (
        <footer className="appFooter">
            <ContactsSection />
            <section className="logoSection">
                <div className="articles">
                    <article>
                        <h3>A empresa</h3>
                        <Link to={`/app/sobre-nos`}>Sobre Nós</Link>
                        <Link to={`/app/contactos`}>Contactos</Link>
                        <Link to={`/app/faq`}>FAQ</Link>
                    </article>
                    {/* <article>
                        <h3>Account</h3>
                        <Link to={`/app/login`}>Login</Link>
                        <Link
                            onClick={logout}
                            to={"/app/login"}
                        >Log out</Link>
                    </article> */}
                </div>
                <Link className='logoLink' onClick={handleTopClick}>
                    <figure className='ergologo'/>
                    <figcaption>
                        All Rights Reserved <br/>
                        © {new Date().getFullYear()} ergoface-lda.com<br/>
                    </figcaption>
                </Link>
            </section>
        </footer>
    );
}