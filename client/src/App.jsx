import React, { useContext, useEffect, useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Apollo & gql
import ApolloClientComponent from './jcPACK/graphql/ApolloClientComponent';
import { ApolloProvider } from '@apollo/client';

import Theme from './jcPACK/theme';
import ScrollToTop from './jcPACK/hooks/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './jcPACK/context/authContext'
import { routerSetup } from './jcPACK/router/router';
import { setAppPath } from './jcPACK/reduxStore/appSlice';
import { appData } from './jcPACK/Apps/app/App';

import Footer from './jcPACK/components/footer/footer';
import LoadingToRedirect from './jcPACK/components/LoadingToRedirect';
import Header from './jcPACK/components/Header/Header';

import QualityBadges from './jcPACK/components/QualityBadges/QualityBadges';

export const AppsData = [
  appData,
]

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {contextState} = useContext(AuthContext);
  const stateTheme = useSelector((state) => state.theme);

  const [appData, setAppData] = useState(AppsData[0]);
  const [currentPageLinks, setCurrentPageLinks] = useState(AppsData[0].navLinks);

  const [currentAppBasePath, setCurrentAppBasePath] = useState(
    `/${location.pathname.split('/')[1] || ""}`
  );
  const [currentAppPath, setCurrentAppPath] = useState(
    `/${location.pathname.split('/')[2] || ""}`
  );

  const topRef = useRef();
  const topAppRef = useRef();

  useEffect(()=>{
    AppsData.map((_appData)=>{
      if(_appData.path.toLowerCase() === currentAppBasePath.toLowerCase()){
        setAppData(_appData);
      }
    });
  },[])

  useEffect(()=>{
    const _currentAppBasePath = `/${location.pathname.split('/')[1] || ""}`
    const _currentAppPath = `/${location.pathname.split('/')[2] || ""}`
    setCurrentAppBasePath(_currentAppBasePath)
    setCurrentAppPath(_currentAppPath)
    setCurrentPageLinks(pageLinksFromAppData(appData, _currentAppPath));
      
    AppsData.map((_appData)=>{
      if(_appData.path.toLowerCase() === _currentAppBasePath.toLowerCase()){
        setAppData(_appData);
        setCurrentPageLinks(pageLinksFromAppData(_appData, _currentAppPath));
        return;
      }
    });
  },[navigate])
  
  useEffect(()=>{
    setCurrentPageLinks(pageLinksFromAppData(appData, currentAppPath));
    dispatch(setAppPath(appData?.path || '/'));
  },[appData])

  function pageLinksFromAppData(appData, appPath) {
    const pageLinks = appData?.routesData?.filter((routeData)=>routeData.path === appPath)[0]?.navLinks || [];

    return pageLinks;
  }

  return (<>
     <ApolloProvider client={ApolloClientComponent}>
      <Theme />
      <ToastContainer />
      <ScrollToTop />
      <span ref={topRef} id="top" />
      
      <Header />

      <div id="appContainer" ref={topAppRef}>
        <main className='appRoutes'>
          <Routes>
            {AppsData.map((appData)=>routerSetup(appData))}
            <Route path='*' 
              element={<LoadingToRedirect 
                path={`${AppsData[0].path}`} />} 
                />
          </Routes>
        </main>
      </div>
      
      <QualityBadges />
      <Footer />
  </ApolloProvider>
  </>
  );
};

export default App;
