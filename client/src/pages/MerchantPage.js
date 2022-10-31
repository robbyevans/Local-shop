import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function MerchantPage({adminUser, setAdminUser,admins, getAdmins, mStores, getmStores, onAddAdmin, onDeleteAdmin, onAddStore }) {
  //fetch admins from db
  const [userId, setUserId] = useState()
  useEffect(() => {   
   setUserId(localStorage.getItem('userId'))  
}, []);
console.log(userId)

  useEffect(() => {
    fetch(`/users/${userId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data)
          getAdmins(data.admins);
        }); 
      }
    });
  }, [getAdmins]);

  //fetch stores from db
  useEffect(() => {
    fetch(`/users/${userId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) =>
        {
          console.log(data)
          getmStores(data.stores)
        } );
      }
    });
  }, [getmStores]);
  console.log(mStores);
  return (
    <div>
      <NavBar />

      {/* sidebar dashboard */}

      <SideBar adminUser={adminUser} setAdminUser={setAdminUser} onAddAdmin={onAddAdmin} mStores={mStores} admins={admins} onDeleteAdmin={onDeleteAdmin} onAddStore={onAddStore} />
    </div>
  );
}

export default MerchantPage;
