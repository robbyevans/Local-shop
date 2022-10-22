import React from 'react'
import Landing from './MainLandingPage/Landing';
import ClerklandingPage from "./ClerkLandingPage"
import './App.css';
import Merchant from './Merchant';
function App() {


  return (
  
    <div className="App">
       <Landing />
       <ClerklandingPage/>
        <Merchant/>
    </div>
  )
}

export default App
