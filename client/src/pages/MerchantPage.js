import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function MerchantPage({ admins, getAdmins, mStores, getmStores, onAddAdmin }) {
  let adminsUrl = "http://localhost:3000/admins";
  let storesUrl = "http://localhost:3000/stores";

  //fetch admins from db
  useEffect(() => {
    fetch(`${adminsUrl}`).then((r) => {
      if (r.ok) {
        r.json().then((admins) => getAdmins(admins));
      }
    });
  });

  //fetch stores from db
  useEffect(() => {
    fetch(`${storesUrl}`).then((r) => {
      if (r.ok) {
        r.json().then((stores) => getmStores(stores));
      }
    });
  });
  console.log(mStores);
  return (
    <div>
      <NavBar />

      {/* sidebar dashboard */}

      <SideBar onAddAdmin={onAddAdmin} mStores={mStores} admins={admins} />
    </div>
  );
}

export default MerchantPage;
