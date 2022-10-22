import React from 'react'
import { Route, Routes } from "react-router";
import '../MainLandingPage/design.css'
import MainBar from './MainBar/MainBar'
import Footer from './footer/Footer'
import ShowCase from './ShowCase'


{/*import Register from './RegisterMerchant/Register'
import MerchantLogIn from './Signin/MerchantLogin/MerchantLogIn'
import AdminLogin from './Signin/AdminLogin/AdminLogin'
import ClerkLogin from './Signin/ClerkLogin/ClerkLogin'*/}


function Landing() {
  return (
    <>
      
        <MainBar />
        <Routes>
          <Route exact path='/' element={<ShowCase/> } />
          {/*<Route path='/mlog-in' element={<MerchantLogIn/>} />
          <Route path='/alog-in' element={<AdminLogin/>} />
          <Route path='/clog-in' element={<ClerkLogin/>} />
          <Route path='/Register' element={<Register/>} />*/}

        </Routes>
        <Footer />
      
    </>
  )
}

export default Landing
