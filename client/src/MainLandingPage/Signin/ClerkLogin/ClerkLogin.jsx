import React, { useState }from 'react'
import { useNavigate } from 'react-router';
import Footer from '../../footer/Footer';
import MainBar from '../../MainBar/MainBar';

const ClerkLogin = ({setUser}) => {

  

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const navigate=useNavigate()
  function handleClick(){
    navigate("/clerk")

  }

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
    <MainBar/>
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
          
            <button onClick={handleClick} type='submit'>Log In</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default ClerkLogin
