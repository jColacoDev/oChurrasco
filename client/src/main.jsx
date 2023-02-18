import "./jcPACK/index.scss";
import "./jcPACK/Animations/underlineText.scss";
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import { AuthProvider } from './jcPACK/context/authContext'
import { Provider } from "react-redux";
import store from "./jcPACK/reduxStore/store";
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthProvider>
        <Provider store={store}>
          {/* <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          > */}
              <App />
          {/* </GoogleReCaptchaProvider> */}
        </Provider>
      </AuthProvider>    
    </BrowserRouter>
  </React.StrictMode>,
)
