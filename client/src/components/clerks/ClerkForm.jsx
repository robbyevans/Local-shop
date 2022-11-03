import React, { useState, useEffect } from 'react'
// import '../../../App.css'
// import Spinner from '../../common/spinner/Spinner'
// import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid'
// import clerkAnalytics from '../analytics/clerkAnalytics';
// import { DataGrid } from '@mui/x-data-grid';



const ClerkForm = ({setClerkUser}) => {


  const[adminId, setAdminId]=useState(localStorage.getItem('adminId'))



  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password_digest: '',
    admin_id:adminId

  })

  const [clerks, setClerks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    createClerk();
    console.log(formData);
  }

  //function adding clerk
  const createClerk = (data) => {
    fetch("/clerks", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(data)
        setClerkUser(data);
        
    })
  }
  
  //handling form field state
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
 
//fetch clerks
  useEffect(() => {
    fetch("/clerks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      setClerks(data)
    })
  }, [])


  
  return (
    <>
    <Grid item xs={8}>
      <div className='container'>
        <div className="row mt-5">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
          <h3>Clerks</h3>
          </div>
        </div>

      <div className="modal" id="form-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title ">New Clerk</h3>
              <button className="btn-close" ></button>
            </div>
    
            <div className="modal-body">
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col my-2">
                    <input type="text"
                      name="name"
                      placeholder='Clerk Name'
                      className="form-control"
                    />
                  </div>
                  <div className="col my-2">
                    <input type="number"
                      className="form-control"
                      name="full name"
                      value={formData.full_name}
                      onChange={(e) => handleChange(e)}
                      placeholder='Full name'
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type="text"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      placeholder='email'
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input type="text"
                      name="password"
                      value={formData.password_digest}
                      onChange={(e) => handleChange(e)}
                      placeholder='password'
                      className="form-control"
                    />
                  </div>

                  <div className="col" data-bs-dismiss="modal">
                        <input type="submit"
                        className="btn btn-primary btn-block form-control mt-2"
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
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {clerks.map((clerk) => (
            <tr key={clerk.id}>
              <td>{clerk.full_name}</td>
              <td>{clerk.email}</td>
              <td>{clerk.password_digest}</td>
              <button>Deactivate</button>
              <button>Delete</button>
          </tr>
        ))}
        </tbody>
      </table>      
      </div>
      </Grid>  
      </>
  )
}

export default ClerkForm;