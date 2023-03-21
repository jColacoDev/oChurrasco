import './SideNav.scss'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ChurrascoLogo from '../ChurrascoLogo/ChurrascoLogo'
import MenuHamburger from '../MenuHamburger/MenuHamburger'
import { appData } from '../../Apps/app/App'

export default function SideNav() {

  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [flames, setFlames] = useState(false);

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
          >Entrance</Link></li>
          <li><Link to={`${appData.path}/menu`}
            className={location.pathname === `${appData.path}/menu` ? "active" : ""}
          >Menu</Link></li>
          <li><Link to={`${appData.path}/reservation`}
            className={location.pathname === `${appData.path}/reservation` ? "active" : ""}
          >Reservation</Link></li>
          <li><Link to={`${appData.path}/orders`}
            className={location.pathname === `${appData.path}/orders` ? "active" : ""}
          >Orders</Link></li>
          <li><Link to={`${appData.path}/contacts`}
            className={location.pathname === `${appData.path}/contacts` ? "active" : ""}
          >Contacts</Link></li>
          <li><Link to={`${appData.path}/about-us`}
            className={location.pathname === `${appData.path}/about-us` ? "active" : ""}
          >About us</Link></li>
          <li><Link to={`${appData.path}/community`}
            className={location.pathname === `${appData.path}/community` ? "active" : ""}
          >Community</Link></li>
          {/* <li><Link to={`${appData.path}/login`}
            className={location.pathname === `${appData.path}/login` ? "active" : ""}
          >Login</Link></li> */}
        </ul>
      </div>
        <MenuHamburger open={navOpen} setOpen={setNavOpen}/>
    </nav>
  )
}
