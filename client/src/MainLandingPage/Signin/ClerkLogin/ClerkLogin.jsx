import React, { useState }from 'react'
import { useNavigate } from 'react-router';
import Footer from '../../footer/Footer';
import MainBar from '../../MainBar/MainBar';

const ClerkLogin = ({setClerkUser}) => {

  

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const navigate=useNavigate()
  

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch ("/clerk/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r)=>{
      return r.json()
    })
    .then((data) =>{
      if(data.error){
        alert(data.error)
      }else
      {
        console.log(data)
        setClerkUser(data)
        localStorage.setItem("clerkId", data.id)
        navigate('/clerk')
      }
    })
  }

  return (
    <>
    <MainBar/>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='formation-control' onSubmit={handleSubmit}>
          <input type="text"
                id="username"
                placeholder='email'
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
      <Footer/>
    </>
  )
}

export default ClerkLogin
