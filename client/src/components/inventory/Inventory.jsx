import React, { useState, useEffect } from 'react'
// import Spinner from '../../common/spinner/Spinner'
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const Inventory = () => {

  // const [loading, setLoading] = useState(false)
  const [inventories, setInventories] = useState([])
 

  useEffect(() => {
    fetch("http://localhost:3000/inventories")
      .then((response) => response.json())
      .then((data) => {
      setInventories(data)
    })
  }, [])
  
  return (
      <div className='container'>
      <h3>Inventory</h3>

      <button className="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#form-modal"><ControlPointIcon />New</button>

      <div className="modal" id="form-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* modal header */}
            <div className="modal-header">
              <h3 className="modal-title">New Inventory</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {/*modal body */}
            <div className="modal-body">
            <form action="">
        <div className="row">
          <div className="col my-2">
            <input type="text"
              name="name"
              placeholder='Item Name'
              className="form-control"
            />
          </div>
          <div className="col my-2">
            <input type="number"
              className="form-control"
              name="price"
              placeholder='Price'
            />
          </div>
          
        </div>
        <div className="row">
          <div className="col">
            <input type="text"
              name="quantity"
              placeholder='quantity'
              className="form-control"
            />
          </div>
          <div className="col">
            <input type="number"
              className="form-control"
              name="spoilt"
              placeholder='spoilt'
            />
          </div>
          
        </div>
        <div className="row">
          <div className="col my-2">
            <input type="text"
              name="sellingPrice"
              placeholder='Selling Price'
              className="form-control"
            />
          </div>
          <div className="col my-2">
            <input type="number"
              className="form-control"
              name="buyingPrice"
              placeholder='Buying Price'
            />
          </div>
          
        </div>
        <div className="row">
          <div className="col my-2">
            <input type="text"
              name="name"
              placeholder='payment status'
              className="form-control"
            />
          </div>
          <div className="col">
            <input type="submit"
              className="btn btn-primary btn-block form-control"
            />
          </div>
          
        </div>
      </form>
            </div>
            {/*modal footer */}
            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

      </div>
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
          {inventories.map((inventory) => (
            <tr key={inventory.id}>
              <td>{inventory.name}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.instock}</td>
              <td>{inventory.spoilt}</td>
              <td>{inventory.buyingPrice}</td>
              <td>{inventory.sellingPrice}</td>
              <td>{inventory.status}</td>
          </tr>
        ))}
        </tbody>
      </table>
          
    </div>
  )
}

export default Inventory