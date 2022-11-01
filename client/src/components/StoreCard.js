import React from 'react';
import { useNavigate } from 'react-router-dom';

function StoreCard({store}) {
    let storeId = store.id 
    const navigate  = useNavigate()
    function handleClick(){
        navigate(`/storepage/${storeId}`)
    }
    return (
        <div className="col-12 col-md-6 col-lg-4" >
        <div className="card">
          <div className="store-card">
            <h2 className="store-card-title">
             {store.store_name}
            </h2>
            <p >
             Location: {store.location}
            </p>
            <p c>
             Description: {store.description}
            </p>
        
            <button className="storecard-btn" onClick={handleClick}>
              Go to Store
            </button>
          </div>
        </div>
      </div>   
    );
}

export default StoreCard;