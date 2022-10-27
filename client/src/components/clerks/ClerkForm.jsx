import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const ClerkForm = () => {

  let adminId = 1

    // let navigate = useNavigate();
    const [formData, setFormData] = useState({
        full_name: '',
        email:'',
        password_digest:'',
        admin_id:''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createClerk()
    }
    const createClerk = (data) => {
        fetch("http://localhost:3000/clerks", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data))
        // navigate('/')
        alert("New Review added successfully!");
    }
    
    
  
  return (
    <Grid item xs={8}>
    <div className='container'>
      <div className="row mt-5">
        <div className="col-md-6">
          <button className="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#form-modal"><ControlPointIcon />New Clerk</button>
        </div>
        <div className="col-md-6">
        <h3>Clerks</h3>
        </div>
      </div>

    <div className="modal" id="form-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h3 className="modal-title ">Add Clerk</h3>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          {/*modal body */}
          <div className="modal-body">
          <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col my-2">
                  <input type="text"
                    name="full name"
                    placeholder='full name'
                    className="form-control"
                  />
                </div>
                <div className="col my-2">
                  <input type="email"
                    className="form-control"
                    name="price"
                    placeholder='email'
                  />
                </div>
              </div>
              
              <div className="row">
                <div className="col my-2">
                  <input type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    placeholder='password'
                    className="form-control"
                  />
                </div>
                <div className="col my-2">
                  <input type="password"
                    className="form-control"
                    name="confirm_password"
                    placeholder='confirm password'
                  />
                </div>
              </div>
              
              
                <div className="col">
                      <input type="submit"
                        className="btn btn-primary btn-block form-control mt-2"
                  />
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
  )
}

export default ClerkForm