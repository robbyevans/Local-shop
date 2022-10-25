import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Route, Routes } from 'react-router';
import './App.css';
import AdminBase from './components/adminbase/AdminBase';
import Inventory from './components/inventory/Inventory'
import InventoryAnalytics from './components/analytics/InventoryAnalytics';

function App() {

  return (
  
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path='/admin' element={<AdminBase/>}/>
        <Route path="/inventories" element={<Inventory />} />
        <Route path='/analytics' element={<InventoryAnalytics/>}/>
        </Routes>
        </Provider>
      
    </div>
  )
}
export default App;
