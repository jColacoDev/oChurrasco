import React, { useContext, useEffect, useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Apollo & gql
import ApolloClientProvider from './jcPACK/graphql/ApolloClientProvider';

import Theme from './jcPACK/theme';
import ScrollToTop from './jcPACK/hooks/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import { routerSetup } from './jcPACK/router/router';
import { setAppPath } from './jcPACK/reduxStore/appSlice';
import { appData } from './jcPACK/Apps/app/App';

import Footer from './jcPACK/components/footer/footer';
import LoadingToRedirect from './jcPACK/components/LoadingToRedirect';
import Header from './jcPACK/components/Header/Header';
import QualityBadges from './jcPACK/components/QualityBadges/QualityBadges';

// Translations
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './jcPACK/translations/en.json';
import ptTranslation from './jcPACK/translations/pt.json';
import TopNotes from './jcPACK/components/TopNotes/TopNotes';
import SideNav from './jcPACK/components/SideNav/SideNav';
i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
  },
});

export const AppsData = [
  appData,
]

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
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
     <ApolloClientProvider>
      <Theme />
      <ToastContainer />
      <ScrollToTop />
      <TopNotes ref={topRef} id="top"/>
      {/* <Header /> */}
      <div id="appContainer" ref={topAppRef} className='font_Merienda'>
          <SideNav />
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
  </ApolloClientProvider>
  </>
  );
};

export default App;
