import './SideNav.scss'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ChurrascoLogo from '../ChurrascoLogo/ChurrascoLogo'
import MenuHamburger from '../MenuHamburger/MenuHamburger'

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
        <Link className='logo' to="/app/home">
          <ChurrascoLogo flames={false} />
        </Link>
        <ul className={navOpen ? "open":""}>
          <li><Link to={"/app/home"}
            className={location.pathname === "/app/home" ? "active" : ""}
          >Entrance</Link></li>
          <li><Link to={"/app/menu"}
            className={location.pathname === "/app/menu" ? "active" : ""}
          >Menu</Link></li>
          <li><Link to={"/app/reservation"}
            className={location.pathname === "/app/reservation" ? "active" : ""}
          >Reservation</Link></li>
          <li><Link to={"/app/orders"}
            className={location.pathname === "/app/orders" ? "active" : ""}
          >Orders</Link></li>
          <li><Link to={"/app/contacts"}
            className={location.pathname === "/app/contacts" ? "active" : ""}
          >Contacts</Link></li>
          <li><Link to={"/app/about-us"}
            className={location.pathname === "/app/about-us" ? "active" : ""}
          >About us</Link></li>
          <li><Link to={"/app/community"}
            className={location.pathname === "/app/community" ? "active" : ""}
          >Community</Link></li>
          <li><Link to={"/app/login"}
            className={location.pathname === "/app/login" ? "active" : ""}
          >Login</Link></li>
        </ul>
      </div>
        <MenuHamburger open={navOpen} setOpen={setNavOpen}/>
    </nav>
  )
}
