import React, { useState, useEffect } from 'react'


const OrderRequests = () => {

    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/orders")
        .then((res)=>res.json())
        .then((data) => {
            setOrders(data)
            console.log(data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    },[ ])

  return (
      <div className='container'>
          <div className="row">
              <div className="col-md-10 offset-md-2">
                <h3>Order Requests</h3>
              <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Clerk</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.item_name}</td>
              <td>{order.quantity}</td>
              <td>{order.clerk_name}</td>
              <td>{order.date}</td>
          </tr>
        ))}
        </tbody>
      </table>   
            </div>
          </div>
    </div>
  )
}

export default OrderRequests