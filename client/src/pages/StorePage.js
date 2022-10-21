import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';

function StorePage() {
    const params = useParams()
    const storeId = params.storeId

    const[mStore, setmStore] = useState()
    let storesUrl = ""
    //gets specific store using id
    useEffect(() =>{
         fetch(`${storesUrl}/${storeId}`)
        .then(r => r.json())
        .then(data => {
            setmStore(data)

        })
        .catch((err)=>{
            console.log(err.message);

        });

    },[storeId])

    return (
        <div>
            {/* render report of store with store data*/}
        </div>
    );
}

export default StorePage;