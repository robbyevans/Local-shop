import React from "react";
import StoreCard from "./StoreCard";
import StoreForm from "./StoreForm";

function StoreReports({mStores, onAddStore}) {
  console.log(mStores)
 const renderStores = mStores.map((store)=>{
    return <StoreCard key={store.id} store={store}/>
})

  return (
    <div>
      <StoreForm onAddStore={onAddStore}/>
    <div className="container store-wrap">

      <h3>Stores</h3>
      <div className="row g-3">

            {renderStores}
      </div>
    </div>
    </div>
  );
}

export default StoreReports;
