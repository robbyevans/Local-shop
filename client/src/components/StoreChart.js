import React from 'react';
import Bargraph from '../pages/Bargraph';
import Piechart from '../pages/Piechart';
// import Linegraph from '../pages/Linegraph';

function StoreChart({storeId}) {
    return (
        <>
        <div className='charts'>
           
            <div className="main-chart">
                <Bargraph storeId={storeId}/>
            </div>
            <div className="secondary-chart">
                <Piechart storeId={storeId}/>
            </div>
        </div>
            
        </>
    );
}

export default StoreChart;