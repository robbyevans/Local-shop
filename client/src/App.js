// import logo from './logo.svg';
 import './App.css';
//import ClerkPage from './ClerkPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './SIdebar/Sidebar';
import Inventory from './Inventory/Inventory';
import Order from './Order/Order';
import Dashboard from './Dashboard/Dashboard';

function App() {
    return (
        // 
        //   <ClerkPage/>
        // 
        //<div className="App"></div>
        <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
 
    );
}

export default App;