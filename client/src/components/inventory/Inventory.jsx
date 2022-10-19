import React from 'react'

const Inventory = () => {
  return (
      <div className='container'>
          <h3>Inventory</h3>
           <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>In Stock</th>
        <th>Spoilt</th>
        <th>Buying Price</th>
        <th>Selling Price</th>
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bread</td>
        <td>100</td>
        <td>20</td>
        <td>1</td>
        <td>50</td>
        <td>65</td>
        <td>paid</td>
      </tr>
      <tr>
      <td>Cooking Oil</td>
        <td>200</td>
        <td>40</td>
        <td>0</td>
        <td>50</td>
        <td>65</td>
        <td>paid</td>
      </tr>
      <tr>
      <td>Milk</td>
        <td>50</td>
        <td>20</td>
        <td>3</td>
        <td>50</td>
        <td>70</td>
        <td>paid</td>
      </tr>
    </tbody>
  </table>
          
    </div>
  )
}

export default Inventory