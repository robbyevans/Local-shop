import React from "react";
import StoreCard from "./StoreCard";
import StoreForm from "./StoreForm";

function StoreReports({mStores, onAddStore,admins}) {
  console.log(mStores)
 const renderStores = mStores.map((store)=>{
    return <StoreCard key={store.id} store={store}/>
})

  return (
    <div>
      <StoreForm onAddStore={onAddStore} admins={admins}/>
    <div className="container store-wrap">

      <h3>Available Stores</h3>
      <div className="row g-3">

            {renderStores}
      </div>
    </div>
    </div>
  );
}

export default StoreReports;
