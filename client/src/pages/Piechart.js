// import "./st.css";
import {useState,useEffect} from "react"
import React from "react";
import { PieChart, Pie, Cell,ResponsiveContainer } from "recharts";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Piechart(storeId) {
  const[data,setData]=useState([])
  console.log(data)
 
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



// label on individual chart
  return (
    
    
    <ResponsiveContainer  className="pie">
      <PieChart className="pie-chart"  >
      
  
        <Pie
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index
          }) => {
            console.log("handling label?");
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text
              
                
                x={x}
                y={y}
                fill="#000"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {/* {data[index].name} ({value}) */}
                {data[index].name}({value})
                
              </text>
            );
          }}
          // end
          // the  actual piechart
          data={data}
          cx={130}
          cy={150}
      
          labelLine={true}
      
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="quantity"
      
        >
      
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      
      </PieChart>
      </ResponsiveContainer> 

  );
}
