//Footer.jsx
import './footer.scss'; 
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { appData } from "../../Apps/app/App";
import ContactsSection from '../ContactsSection/ContactsSection';
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../context/authContext';
import ChurrascoLogo from '../ChurrascoLogo/ChurrascoLogo';

export default function Footer() {
    const portfolioData = appData.routesData[0];
    const cvData = appData.routesData[1];
    const {state, dispatch} = useContext(AuthContext)
    let navigate = useNavigate();

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
            <section>
                <div className="articles">
                    <article>
                        <h3>my Table</h3>
                        <Link to={`${appData.path}/menu`}>Menu</Link>
                        <Link to={`${appData.path}/reservation`}>Reservation</Link>
                        <Link to={`${appData.path}/orders`}>Orders</Link>
                    </article>
                </div>
            </section>
            <section className="logoSection">
                <div className="articles">
                    <article>
                        <h3>The Restaurant</h3>
                        <Link to={`${appData.path}/home`}>Entrance</Link>
                        <Link to={`${appData.path}/about-us`}>About us</Link>
                        <Link to={`${appData.path}/contacts`}>Contacts</Link>
                        <Link to={`${appData.path}/community`}>Community</Link>
                    </article>
                </div>
                <Link to={`${appData.path}`}>
                    <ChurrascoLogo white={true} flames={true} />
                </Link>
            </section>
        </footer>
    );
}