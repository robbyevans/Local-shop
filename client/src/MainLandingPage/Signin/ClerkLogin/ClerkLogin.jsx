import React, { useState }from 'react'

const ClerkLogin = ({setUser}) => {

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
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input type="text"
                id="username"
                placeholder='username'
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
          />
           <input type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)} 
          />
          
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ClerkLogin
