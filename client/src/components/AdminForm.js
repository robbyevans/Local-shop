import React, { useState } from "react";
import AdminList from "./AdminList";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid'

function AdminForm({ onAddAdmin, admins,onDeleteAdmin, mStores}) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [storeId, setStoreId] = useState(1);
  const [password, setPassword] = useState("");
  let userId =1

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/admins", {
      method: "POST",
      body: JSON.stringify({
        full_name: fullname,
        email: email,
        store_id: storeId,
        status: "active",
        token: "",
        user_id: userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onAddAdmin(data);
      });
    setFullname("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>

   <Grid item xs={8}>
      <div className='container'>
        <div className="row mt-5">
          <div className="col-md-6">
            <button className="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#form-modal"><ControlPointIcon />New</button>
          </div>
     
        </div>

      <div className="modal" id="form-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* modal header */}
            <div className="modal-header">
              <h3 className="modal-title">New Admin</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {/*modal body */}
            <div className="modal-body">
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col my-2">
                    <input type="text"
                      name="Full Name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                      autofocus
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="col my-2">
                    <input type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='email'
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type="text"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                  </div>
                  <div className="row">
                  <div className="col ">
                    <p> Store: </p>
                  <select className="btn btn-secondary dropdown-toggle" value={storeId} onChange = {(e)=> setStoreId(e.target.value)}> 
                 
                  {mStores.map((store) => {

                    console.log(store)
                   
                     return  <option value={store.id}>{store.store_name}</option>

                })}


            </select>
                  </div>
                  </div>
                
                </div>
                <div className="row">
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
    </div>
   </Grid>


      
      <AdminList admins={admins} onDeleteAdmin={onDeleteAdmin} />
    </div>

  
  );
}

export default AdminForm;
