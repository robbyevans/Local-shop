import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function Landing() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/merchant' component={Merchant} />
          <Route path='/admin' component={Admin} />
          <Route path='/clerk' component={Clerk} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Landing
