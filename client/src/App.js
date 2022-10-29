import React,{useState, useEffect} from 'react'
import './App.css';
import Merchant from './Merchant';
import { Route, Routes, Link } from "react-router";
import StorePage from './pages/StorePage';
import OrderForm from './components/ClerkPage/pages/Order/OrderForm';
import Table from "./components/ClerkPage/ItemsTables/Table"
import RequestTable from './components/ClerkPage/RequestItemTable.js/RequestTable';
import ClerkPage from './components/ClerkPage/ClerkPagex';
import MerchantLogIn from './MainLandingPage/Signin/MerchantLogin/MerchantLogIn';
import AdminLogin from './MainLandingPage/Signin/AdminLogin/AdminLogin';
import ClerkLogin from './MainLandingPage/Signin/ClerkLogin/ClerkLogin';
import Register from './MainLandingPage/RegisterMerchant/Register';
import "./MainLandingPage/design.css"
import Clerk from './components/clerks/Clerks'
import Inventory from './components/inventory/Inventory'
import SideBar from './components/sidebar/SideBar';
import InventoryAnalytics from './components/analytics/InventoryAnalytics';
import ClerkLandingPage from './ClerkLandingPage';
import Landing from './MainLandingPage/Landing'


function App() {

  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);
   
  const getToken = ()=> {
    return JSON.parse(localStorage.getItem('id_token'));
  }
  console.log(getToken())
  return (
  
    <div className="App">
          
      <Routes>
        
        <Route path='/admin' element={<SideBar />} />
       


       <Route exact path="/" element={<Landing user={user}/> }></Route>
       <Route path="/clerk" element={<ClerkLandingPage user={user}/>}></Route>
        <Route path="/merchant" element={<Merchant user={user} />}></Route>
       <Route path="/storepage/:storeId" element={<StorePage />}></Route>
       <Route path='/orders' element={<OrderForm/>} />
       <Route path='/addItems' element={<Table/>} />
       <Route path='/addRequests' element={<RequestTable/>} />
       <Route path="/clerks" element={<Clerk />}></Route>
       
       <Route path='/oldPage' element={<ClerkPage/>} />



       <Route path='/mlog-in' element={<MerchantLogIn setUser={setUser}/>} />
       <Route path='/alog-in' element={<AdminLogin/>} />
       <Route path='/clog-in' element={<ClerkLogin/>} />
       <Route path='/Register' element={<Register setUser={setUser}/>} />
        <Route path="/inventories" element={<Inventory />} />
        <Route path='/analytics' element={<InventoryAnalytics/>}/>
        </Routes>
    </div>
  )
}
export default App;
