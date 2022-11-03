import './clerk.css';
// import ClerkNavbar from './components/ClerkPage/ClerkNavbar/Navbar';
import { Route, Routes } from "react-router";
// import Home from './components/ClerkPage/pages/Home/Home';
import Table from "./components/ClerkPage/ItemsTables/Table"
/*import ClerkPage from './ClerkPage';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderForm from './components/ClerkPage/pages/Order/OrderForm';
import InventoryForm from './pages/Inventory/inventoryform';
import Table from "./components/ClerkPage/ItemsTables/Table"
import RequestTable from './components/ClerkPage/RequestItemTable.js/RequestTable';
import ClerkPage from './components/ClerkPage/ClerkPagex';*/

//changed to clerklandingpage instead of app
function ClerkLandingPage({setClerkUser}) {
  return (
<>
    {/* <ClerkNavbar /> */}
        <Routes>
        <Route exact path='/' element={<Table setClerkUser={setClerkUser}  />} />
          {/*<Route exact path='/home' element={<Home/>} />
          <Route path='/orders' element={<OrderForm/>} />
          <Route path='/addItems' element={<Table/>} />
          <Route path='/addRequests' element={<RequestTable/>} />
          <Route path='/oldPage' element={<ClerkPage/>} />*/}
        </Routes>


      </>
  );
}

export default ClerkLandingPage;
