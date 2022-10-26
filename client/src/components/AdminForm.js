import React, { useState } from "react";
import AdminList from "./AdminList";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid'

function AdminForm({ onAddAdmin, admins,onDeleteAdmin}) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [store, setStore] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/admins", {
      method: "POST",
      body: JSON.stringify({
        full_name: fullname,
        email: email,
        store: store,
        status: "active",
        token: ""
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
    setStore("");
    setPassword("")
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
                  <div className="col">
                    <input type="text"
                      name="store"
                      placeholder="store"
                      className="form-control"
                      value={store}
                      onChange={(e) => setStore(e.target.value)}
                    />
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
