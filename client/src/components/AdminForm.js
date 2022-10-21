import React, {useState} from 'react'
import AdminList from './AdminList'

function AdminForm({onAddAdmin}) {
  const[name, setName]= useState()
  const [email, setEmail] = useState()
  const [store, setStore] =useState()

  let adminsUrl =""
  function handleSubmit(event){
      event.preventDefault();
      fetch(`${adminsUrl}`, {
           method: "POST",
            body: JSON.stringify({
             name:name,   
             email:email,
             store: store
              
  }),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })
  .then(response => response.json())
  .then((data)=> {
      onAddAdmin(data)
  });
  setName("")
  setEmail("")
  setStore("")
  }

  return (
    <div>
      <div className="text-center mt-5">
        <form className ="max-width:300px; margin:auto;" onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 font-weight-normal'>Please Enter your details</h1>

          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input type="text" id="fullName" className="form-control" placeholder="Full Name" required autofocus value={name} onChange={(e)=> setName(e.target.value)}></input>
          
          <label htmlFor="emailAddress" className="sr-only">Email Address</label>
          <input type="email" id="emailAddress" className="form-control" placeholder="Email Address" required autofocus value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          
          <label htmlFor='password' className='sr-only'>Password</label>
          <input type="password" id="password" placeholder="Password" className='form-control'></input>
          
          <label htmlFor="store" className="sr-only">Store</label>
          <input type="text" id="store" className="form-control" placeholder="Store" required autofocus value={store} onChange={(e)=> setStore(e.target.value)}></input>

          <div className='mt-3'>
            <button className='btn btn-lg btn-primary'>Submit</button>
          </div>
        </form>
      </div>
      <AdminList/>
    </div>
  )
}

export default AdminForm