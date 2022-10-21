import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function MerchantPage({admins, getAdmins, mStores, getmStores, onAddAdmin}) {


 //fetch admins from db
 useEffect(() => {
   fetch(`http://localhost:3000/admins`).then((r) => {
     if (r.ok) {
       r.json().then((admins) => getAdmins(admins));
     }
   });
   },[getAdmins])
   //fetch stores from db
   useEffect(() => {
     fetch(`http://localhost:3000/stores`).then((r) => {
       if (r.ok) {
         r.json().then((stores) => getmStores(stores));
       }
     });
     }, [getmStores]);
     console.log(mStores)
  return (
    <div>
     <NavBar/>

      <SideBar onAddAdmin={onAddAdmin} mStores= {mStores} admins={admins}/>
    </div>
  );
}

export default MerchantPage;
