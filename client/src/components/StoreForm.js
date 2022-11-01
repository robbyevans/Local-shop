import React, { useState, useEffect } from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid'

function StoreForm({onAddStore}) {
    const [storename, setStorename] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState(localStorage.getItem('userId'))

  
    function handleSubmit(event) {
      event.preventDefault();
      fetch("/stores", {
        method: "POST",
        body: JSON.stringify({
          store_name: storename,
          location: location,
          description: description,
          user_id :userId
        
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          onAddStore(data);
        });
      setStorename("");
      setLocation("");
      setDescription("");
      
    }
  
    return (
      <div>
  
     <Grid item xs={8}>
        <div className='container'>
          <div className="row mt-5">
            <div className="col-md-6">
              <button className="btn btn-success mb-2" data-bs-toggle="modal"
               data-bs-target="#form-modal"><ControlPointIcon />Add Store</button>
            </div>
       
          </div>
  
        <div className="modal" id="form-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {/* modal header */}
              <div className="modal-header">
                <h3 className="modal-title">New Store</h3>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              {/*modal body */}
              <div className="modal-body">
              <form action="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col my-2">
                      <input type="text"
                        name="storeame"
                        className="form-control"
                        placeholder="Store name"
                        value={storename}
                        onChange={(e) => setStorename(e.target.value)}
                      />
                    </div>
                    <div className="row">
                    <div className="col my-2">
                      <input type="text"
                        className="form-control"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder='location'
                      />
                      </div>
                     
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input type="text"
                        name="description"
                        placeholder="description"
                        className="form-control"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                      />
                    </div>
                  
                  </div>

              
                  <div className="row">
                  <div className="col" data-bs-dismiss="modal">
                      <input type="submit"
                         className="mbtn-submit"
                        
                        
                      />
                    </div>
                    </div>
                </form>
              </div>
           
            </div>
          </div>
        </div>
      </div>
     </Grid>
      </div>
  
    
    );
}

export default StoreForm;