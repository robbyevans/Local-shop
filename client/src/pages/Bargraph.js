import {useState,useEffect} from "react"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Bargraph (storeId) {
  const[data,setData]=useState([])
 
  useEffect(() => {
    fetch(`/stores/${storeId.storeId}/items`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setData(data));
      }
      else
      console.log("NO RECORDS FOUND!")
      console.log(storeId)
    });
  },[]);

    return ( 

      <div className="bargraph">
         <div className="minibar-title-wrapper">
           <h4 className="minibar-title">sale statistics</h4>
         </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
              {/* <Bar dataKey="quantity" fill="#e60000" />
              <Bar dataKey="inStock" fill="#f76700" />
              <Bar dataKey="spoilt" fill="#f7bc00" /> */}
              <Bar dataKey="BuyingPrice" fill="#5546cc" />
              <Bar dataKey="SellingPrice" fill="#009e3b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}
