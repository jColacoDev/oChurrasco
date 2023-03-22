//Footer.jsx
import './footer.scss'; 
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { appData } from "../../Apps/app/App";
import ContactsSection from '../ContactsSection/ContactsSection';
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../context/authContext';
import ChurrascoLogo from '../ChurrascoLogo/ChurrascoLogo';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const routesData = t("routesData", { returnObjects: true });
    const footerData = t("footerData", { returnObjects: true });

    const {state, dispatch} = useContext(AuthContext)
    let navigate = useNavigate();

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
                        <h3>{footerData.myTable}</h3>
                        <Link to={`${appData.path}/menu`}>{routesData.menu}</Link>
                        <Link to={`${appData.path}/reservation`}>{routesData.reservation}</Link>
                        <Link to={`${appData.path}/orders`}>{routesData.orders}</Link>
                    </article>
                </div>
            </section>
            <section className="logoSection">
                <div className="articles">
                    <article>
                        <h3>{footerData.theRestaurant}</h3>
                        <Link to={`${appData.path}/home`}>{routesData.entrance}</Link>
                        <Link to={`${appData.path}/about-us`}>{routesData.aboutUs}</Link>
                        <Link to={`${appData.path}/contacts`}>{routesData.contacts}</Link>
                        <Link to={`${appData.path}/community`}>{routesData.community}</Link>
                    </article>
                </div>
                <Link to={`${appData.path}`}>
                    <ChurrascoLogo white={true} flames={true} />
                </Link>
            </section>
        </footer>
    );
}