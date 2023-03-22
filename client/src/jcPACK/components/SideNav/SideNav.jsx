import './SideNav.scss'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ChurrascoLogo from '../ChurrascoLogo/ChurrascoLogo'
import MenuHamburger from '../MenuHamburger/MenuHamburger'
import { appData } from '../../Apps/app/App'
import { handleLanguageChange } from '../../utils/utils'
import { useTranslation } from 'react-i18next'
import i18n from '../../translations/translations'

export default function SideNav() {
  const { t } = useTranslation();
  const routesData = t("routesData", { returnObjects: true });
  
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [flames, setFlames] = useState(false);
  const [translation, setTranslation] = useState("pt");

    useEffect(() => {
    const onLanguageChange = (lng) => {
      setTranslation(lng)
      // console.log(`Language changed to ${lng}`);
    };
    i18n.on('languageChanged', onLanguageChange);
    return () => {
      i18n.off('languageChanged', onLanguageChange);
    };
  }, []);

  useEffect(() => {
    setTranslation(i18n.language)
    // console.log(`Language chosen: ${i18n.language}`);
  }, []);

  useEffect(() => {
    const handleResize= ()=> {
      setFlames(window.innerWidth > 1100)
      setNavOpen(window.innerWidth > 1100)
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return ()=> window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);
  
  return (
    <nav id='SideNav'>
      <div>
        <Link className='logo' to={`${appData.path}/home`}>
          <ChurrascoLogo flames={false} />
        </Link>
        <ul className={navOpen ? "open":""}>
          <li><Link to={`${appData.path}/home`}
            className={location.pathname === `${appData.path}/home` ? "active" : ""}
          >{routesData.entrance}</Link></li>
          <li><Link to={`${appData.path}/menu`}
            className={location.pathname === `${appData.path}/menu` ? "active" : ""}
          >{routesData.menu}</Link></li>
          <li><Link to={`${appData.path}/reservation`}
            className={location.pathname === `${appData.path}/reservation` ? "active" : ""}
          >{routesData.reservation}</Link></li>
          <li><Link to={`${appData.path}/orders`}
            className={location.pathname === `${appData.path}/orders` ? "active" : ""}
          >{routesData.orders}</Link></li>
          <li><Link to={`${appData.path}/contacts`}
            className={location.pathname === `${appData.path}/contacts` ? "active" : ""}
          >{routesData.contacts}</Link></li>
          <li><Link to={`${appData.path}/about-us`}
            className={location.pathname === `${appData.path}/about-us` ? "active" : ""}
          >{routesData.aboutUs}</Link></li>
          <li><Link to={`${appData.path}/community`}
            className={location.pathname === `${appData.path}/community` ? "active" : ""}
          >{routesData.community}</Link></li>
          <li className='translation'>
            <button className={translation === "en" ? "active":""}
              onClick={() => handleLanguageChange("en")}
            >English</button>
            <button className={translation === "pt" ? "active":""}
              onClick={() => handleLanguageChange("pt")}
            >Português</button>
          </li>
          {/* <li><Link to={`${appData.path}/login`}
            className={location.pathname === `${appData.path}/login` ? "active" : ""}
          >{routesData.login}</Link></li> */}
        </ul>
      </div>
        <MenuHamburger open={navOpen} setOpen={setNavOpen}/>
    </nav>
  )
}
