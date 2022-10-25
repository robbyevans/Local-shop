import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Route, Routes } from 'react-router';
import './App.css';
import Inventory from './components/inventory/Inventory'
import InventoryAnalytics from './components/analytics/InventoryAnalytics';
import SideBar from './components/sidebar/SideBar';

function App() {

  return (
  
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path='/admin' element={<SideBar/>}/>
        <Route path="/inventories" element={<Inventory />} />
        <Route path='/analytics' element={<InventoryAnalytics/>}/>
        </Routes>
        </Provider>
    </div>
  )
}
export default App;
