import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function MerchantPage({adminUser, setAdminUser,admins, getAdmins, mStores, getmStores, onAddAdmin, onDeleteAdmin, onAddStore, setUser }) {
  //fetch admins from db
  const [userId, setUserId] = useState(localStorage.getItem('userId'))


  useEffect(() => {
    fetch(`/users/${userId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data)
          getAdmins(data.admins);
        }); 
      }
    });
  }, []);

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
  }, []);
  console.log(mStores);
  return (
    <div>
      <NavBar />

      {/* sidebar dashboard */}

      <SideBar adminUser={adminUser} setAdminUser={setAdminUser} onAddAdmin={onAddAdmin} setUser = {setUser} mStores={mStores} admins={admins} onDeleteAdmin={onDeleteAdmin} onAddStore={onAddStore} />
    </div>
  );
}

export default MerchantPage;
