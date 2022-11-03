import React,{useState, useEffect} from 'react'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const[adminId, setAdminId] = useState(localStorage.getItem('adminId'))
    
    useEffect(() => {
        fetch(`/admins/${adminId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setOrders(data.requested_items)
        })
    },[])

  return (
    
    <div className='container pt-5'>
    <div className="row">
        <div className="col-md-10 offset-md-2">
          <h3>Order Requests</h3>
        <table className="table table-bordered table-dark">
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

export default Orders