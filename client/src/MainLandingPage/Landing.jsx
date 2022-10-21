import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import MainBar from './MainBar/MainBar'
import ClerkLogin from './Signin/ClerkLogin/ClerkLogin'
import Register from '../Register/Register'
import MerchantLogIn from './Signin/MerchantLogin/MerchantLogIn'
import Footer from './footer/Footer'

function Landing() {
  return (
    <>
      <Router>
        <MainBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mlog-in' component={MerchantLogIn} />
          <Route path='/alog-in' component={AdminLogin} />
          <Route path='/clog-in' component={ClerkLogin} />
          <Route path='/Register' component={Register} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Landing
