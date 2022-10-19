import React, { useState, useEffect} from 'react'



const ClerkForm = () => {
    const [formData, setFormData] = useState({})
    
    useEffect(()=>{})
  return (
      <div className='container'>
          <div className="row">
              <div className="col-md-4 offset-md-2">
                  <form action="">
                      <h3 className='text-center'>Add Clerk</h3>
                      <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input type="text" name="fullname"  className='form-control'/>

                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" name="email"  className='form-control'/>

                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" className='form-control'/>
                      </div>
                      <input type="submit" value="Submit"  className='btn btn-success my-3 '/>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default ClerkForm