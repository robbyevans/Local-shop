import React, { useState }from 'react'
import "../Login/design.css"

const AdminLogin = ({setUser}) => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch ("/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <>
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your username and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={handleSubmit} >
            <input type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
          />
              <input type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
          />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              
            </form>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default AdminLogin
