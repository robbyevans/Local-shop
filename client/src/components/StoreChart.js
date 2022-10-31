import React from 'react';
import Bargraph from '../pages/Bargraph';

function StoreChart({storeId}) {
    return (
        <div>
            <Bargraph storeId={storeId}/>
        </div>
    );
}

export default StoreChart;