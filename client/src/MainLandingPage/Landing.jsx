import React from 'react'
import { Route, Routes } from "react-router";

import '../MainLandingPage/design.css'

import MainBar from './MainBar/MainBar'
import Footer from './footer/Footer'
import Register from './RegisterMerchant/Register'
import MerchantLogIn from './Signin/MerchantLogin/MerchantLogIn'
import AdminLogin from './Signin/AdminLogin/AdminLogin'
import ClerkLogin from './Signin/ClerkLogin/ClerkLogin'
import ShowCase from './ShowCase'

function Landing() {
  return (
    <>
      
        <MainBar />
        <Routes>
          <Route path='/' exact component={ShowCase } />
          <Route path='/mlog-in' component={MerchantLogIn} />
          <Route path='/alog-in' component={AdminLogin} />
          <Route path='/clog-in' component={ClerkLogin} />
          <Route path='/Register' component={Register} />

        </Routes>
        <Footer />
      
    </>
  )
}

export default Landing
