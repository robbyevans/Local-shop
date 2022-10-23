import React from 'react'
import { Route, Routes } from 'react-router';
import './App.css';
import AdminBase from './components/adminbase/AdminBase';
import Inventory from './components/inventory/Inventory'
import InventoryAnalytics from './components/analytics/InventoryAnalytics';

function App() {

  return (
  
    <div className="App">
      <Routes>
        <Route path='/admin' element={<AdminBase/>}/>
        <Route path="/inventories" element={<Inventory />} />
        <Route path='/analytics' element={<InventoryAnalytics/>}/>
      </Routes>
      
    </div>
  )
}
export default App;
