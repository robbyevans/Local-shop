import React from 'react'
import Landing from './MainLandingPage/Landing';
import ClerklandingPage from "./ClerkLandingPage"
import './App.css';
import Merchant from './Merchant';
import { Route, Routes } from "react-router";
import StorePage from './pages/StorePage';
import OrderForm from './components/ClerkPage/pages/Order/OrderForm';
import Table from "./components/ClerkPage/ItemsTables/Table"
import RequestTable from './components/ClerkPage/RequestItemTable.js/RequestTable';
import ClerkPage from './components/ClerkPage/ClerkPagex';
import MerchantLogIn from './MainLandingPage/Signin/MerchantLogin/MerchantLogIn';
import AdminLogin from './MainLandingPage/Signin/AdminLogin/AdminLogin';
import ClerkLogin from './MainLandingPage/Signin/ClerkLogin/ClerkLogin';
import Register from './MainLandingPage/RegisterMerchant/Register';
function App() {


  return (
  
    <div className="App">
      <Routes>
       <Route path="/landingpage" element={<Landing/>}></Route>
       <Route path="/clerklandingpage" element={<ClerklandingPage/>}></Route>
       <Route path="/merchantlandingpage" element={<Merchant/>}></Route>
       <Route path="/storepage/:storeId" element={<StorePage />}></Route>
       <Route path='/orders' element={<OrderForm/>} />
       <Route path='/addItems' element={<Table/>} />
       <Route path='/addRequests' element={<RequestTable/>} />
       <Route path='/oldPage' element={<ClerkPage/>} />
       <Route path='/mlog-in' element={<MerchantLogIn/>} />
       <Route path='/alog-in' element={<AdminLogin/>} />
       <Route path='/clog-in' element={<ClerkLogin/>} />
       <Route path='/Register' element={<Register/>} />
       </Routes>
    </div>
  )
}

export default App
