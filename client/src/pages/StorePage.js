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
      <StoreChart storeId={storeId}/>
      <AdminDetails storeId={storeId}/>
      <ProductTable storeId={storeId} />
      
    </div>
  );
}

export default StorePage;
