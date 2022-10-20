import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import MainBar from '../Navbar/MainBar/MainBar'
import AdminLogin from '../Sign-in/AdminLogin/AdminLogin'
import ClerkLogin from '../Sign-in/ClerkLogin/ClerkLogin'
import Register from '../Register/Register'
import Login from '../Sign-in/Login/Login'
import Footer from '../Navbar/footer/Footer'
import Home from '../Navbar/Home'
function Landing() {
  return (
    <>
      <Router>
        <MainBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mlog-in' component={Login} />
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
