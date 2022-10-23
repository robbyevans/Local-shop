import React from 'react'
import SideBar from '../sidebar/SideBar';
import Inventory from '../inventory/Inventory';
import InventoryAnalytics from '../analytics/InventoryAnalytics';
import { Route, Routes } from "react-router";
// import Grid from '@mui/material/Grid'

const AdminBase = () => {
  return (
      <div>
          <SideBar/>
          <Route>
              <Routes path="/inventories" element={<Inventory />} />
              <Routes path='/analytics' element={<InventoryAnalytics/>}/>
          </Route>
          
    </div>
  )
}

export default AdminBase