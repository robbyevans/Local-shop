import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function MerchantPage({adminUser, setAdminUser,admins, getAdmins, mStores, getmStores, onAddAdmin, onDeleteAdmin, onAddStore }) {
  //fetch admins from db
  useEffect(() => {
    fetch("/admins").then((r) => {
      if (r.ok) {
        r.json().then((admins) => {
          getAdmins(admins);
        }); 
      }
    });
  }, [getAdmins]);

  //fetch stores from db
  useEffect(() => {
    fetch("/stores").then((r) => {
      if (r.ok) {
        r.json().then((stores) => getmStores(stores));
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
