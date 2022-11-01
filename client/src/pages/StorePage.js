import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductTable from "../components/ProductsTable";
import NavBar from "../components/NavBar";
import AdminDetails from "../components/AdminDetails";
import StoreChart from "../components/StoreChart";
// import SideBar from "../components/SideBar";

function StorePage() {
  const params = useParams();
  const storeId = params.storeId;
  console.log(storeId);
  console.log(params)

  const [mStore, setmStore] = useState({});
  //gets specific store using id
  useEffect(() => {
    fetch(`/stores/${storeId}`)
      .then((r) => r.json())
      .then((data) => {
        setmStore(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);

  console.log(mStore);

  return (
    <div className="store-page">
      <NavBar />
      <h3 className="bar-title">Store {mStore.store_name} Summary Report</h3>
      <StoreChart storeId={storeId}/>
      <AdminDetails storeId={storeId}/>
      <ProductTable storeId={storeId} />
      
    </div>
  );
}

export default StorePage;
