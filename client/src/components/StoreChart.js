import React from 'react';
import Bargraph from '../pages/Bargraph';
// import Piechart from '../pages/Piechart';

function StoreChart({storeId}) {
    return (
        <div>
            {/* <Piechart storeId={storeId}/> */}
            <Bargraph storeId={storeId}/>
        </div>
    );
}

export default StoreChart;