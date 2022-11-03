import React from 'react';
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import MerchantPage from "./pages/MerchantPage";
//import StorePage from "./pages/StorePage";

function Merchant({user, setUser,setAdminUser}) {
    const [admins, setAdmins] = useState([]);
    //mStores meaning merchant stores
    const [mStores, setmStores] = useState([]);
  
    const getAdmins = useCallback((admins) => {
      setAdmins(admins);
    }, []);

  
    const getmStores = useCallback((mStores) => {
      setmStores(mStores);
    }, []);
  
    function onAddAdmin(newAdmin) {
      setAdmins([...admins, newAdmin]);
    }
    function onAddStore(newStore) {
      setmStores([...mStores, newStore]);
    }
    function onDeleteAdmin(deletedAdmin){
      const newAdmins = admins.filter(admin=> admin.id!== deletedAdmin.id);
      setAdmins(newAdmins)
    }
  
    return (
        <div>
        <Routes>
        <Route exact path="/" element={<MerchantPage setAdminUser={setAdminUser} user= {user} setUser= {setUser} admins={admins} onDeleteAdmin={onDeleteAdmin} getAdmins={getAdmins} mStores={mStores} getmStores={getmStores} onAddAdmin={onAddAdmin} onAddStore={onAddStore}/>}></Route>
        {/*<Route exact path="/storepage/:storeId" element={<StorePage />}></Route>*/}
        </Routes>
        </div>
    );
}

export default Merchant;