import './Dashboard1.scss'
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Actions from './Actions/Actions';
import Settings from './Settings/Settings';

import { svg_icons } from './icons';
import Home from './Home/Home';
import UserList from './ProductList/UserList';
import { useSelector } from 'react-redux';
import Stock from './Stock/Stock';
import { AuthContext } from '../../../../context/authContext';
import { useContext } from 'react';

export default function Dashboard1({
  usersData = [],
  usersLoading = true,
  loading = true,
  setLoading = (f)=>f,
  values = {},
  setValues = (f)=>f,
  userUpdate = (f)=>f,
}) {
    const {state} = useContext(AuthContext);
    const {user} = state;

    const appRef = useRef();
    const [gridListStyle, setGridListStyle] = useState("list");
    const [pageIndex, setPageIndex] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const headerHeight = useSelector((state) => state.headerHeight);

    useEffect(()=>{
      appRef.current.querySelector('.sidebar-list').style.top=`${headerHeight}px`

	  console.log(state)

    },[headerHeight])

    const accountPages= [
      {
		type: "public",  
		icon: svg_icons.home,
		label: "Office",
		element: <Home 
			loading = {loading}
			values = {values}
		/>
      },
      {
        type: "public",  
		icon: svg_icons.pieChart,
		label: "Settings",
		element: <Settings 
          	loading = {loading}
			setLoading = {setLoading}
			values = {values}
			setValues = {setValues}
			userUpdate = {userUpdate}
		/>
      },
      {
        type: "public",  
		icon: svg_icons.notifications,
		label: "Notifications",
		element: <></>
      },
      {
		type: "admin",  
		icon: svg_icons.products,
		label: "Users",
		element: <UserList 
			usersLoading={usersLoading}
			usersData={usersData} 
			gridListStyle={gridListStyle} 
		/>
      },
      {
        type: "admin",  
		icon: svg_icons.inbox,
		label: "Stock",
		element: <Stock headerHeight={headerHeight} />
      },
    ]; 
    
	const isAdmin = () =>{
		return user.email === import.meta.env.VITE_ADMIN_EMAIL;
	}

  return (
    <div className='Dashboard1'>
        <div  ref={appRef} className="app-container">
          <Sidebar 
            pageIndex={pageIndex} 
            setPageIndex={setPageIndex} 
            accountPages={ isAdmin() ?
				accountPages :
				accountPages.filter(accountPage => accountPage.type === "public")
			}
          />
          <div className="app-content">
            <Header 
                title={accountPages[pageIndex].label} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode}
            />
			{
			
			}

            {accountPages[pageIndex]?.label === "Users" &&
              <Actions 
                gridListStyle={gridListStyle}  
                setGridListStyle={setGridListStyle}
              />
             }
            {accountPages[pageIndex].element}
          </div>
      </div>
    </div>
  )
}
