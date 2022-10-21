import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductTable from "../components/ProductsTable";
import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";

function StorePage() {
  const params = useParams();
  const storeId = params.storeId;
  console.log(storeId);

  const [mStore, setmStore] = useState({});
  //gets specific store using id
  useEffect(() => {
    fetch(`http://localhost:3000/stores/${storeId}`)
      .then((r) => r.json())
      .then((data) => {
        setmStore(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [storeId]);

  console.log(mStore);

  return (
    <div>
      <NavBar />

<<<<<<< HEAD
    },[storeId])

    console.log(mStore)

    return (
        <div>
            {mStore.name}
            <p>paid and not paid</p>
            <ProductTable storeId={storeId}/>
        </div>
    );
=======
      {mStore.name}
      <p>paid and not paid</p>
      <ProductTable />
    </div>
  );
>>>>>>> 658bc94a5eab7b9c2e20bc90e4639ad73b3d14c6
}

export default StorePage;
