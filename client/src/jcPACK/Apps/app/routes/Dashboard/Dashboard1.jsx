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

export default function Dashboard1({
  usersData = [],
  usersLoading = true,
  loading = true,
  setLoading = (f)=>f,
  values = {},
  setValues = (f)=>f,
  userUpdate = (f)=>f,
}) {
    const appRef = useRef();
    const [gridListStyle, setGridListStyle] = useState("list");
    const [pageIndex, setPageIndex] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const headerHeight = useSelector((state) => state.headerHeight);

    useEffect(()=>{
      appRef.current.querySelector('.sidebar-list').style.top=`${headerHeight}px`
    },[headerHeight])

    const accountPages= [
      {
          icon: svg_icons.home,
          label: "Office",
          element: <Home 
              loading = {loading}
              values = {values}
            />
      },
      {
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
          icon: svg_icons.products,
          label: "Users",
          element: <UserList 
            usersLoading={usersLoading}
            usersData={usersData} 
            gridListStyle={gridListStyle} 
          />
      },
      {
          icon: svg_icons.inbox,
          label: "Stock",
          element: <Stock />
      },
      {
          icon: svg_icons.notifications,
          label: "Notifications",
          element: <></>
      },
    ]; 
    

  return (
    <div className='Dashboard1'>
        <div  ref={appRef} className="app-container">
          <Sidebar 
            pageIndex={pageIndex} 
            setPageIndex={setPageIndex} 
            accountPages={accountPages} 
          />
          <div className="app-content">
            <Header 
                title={accountPages[pageIndex].label} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode}
            />
            {pageIndex == 2 &&
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
