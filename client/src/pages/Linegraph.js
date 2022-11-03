import {useState,useEffect} from "react"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Linegraph(){
  const[data,setData]=useState([])

  const[adminId, setAdminId] = useState(localStorage.getItem('adminId'))
    
  useEffect(() => {
      fetch(`/admins/${adminId}`)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              setData(data.items)
      })
  },[])
 

    return (
      <div className="linegraph">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
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
            <Line type="monotone" dataKey="SellingPrice" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="BuyingPrice" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}
