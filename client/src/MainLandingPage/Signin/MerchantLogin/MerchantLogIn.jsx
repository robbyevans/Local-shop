import React, { useState }from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router';
import MainBar from '../../MainBar/MainBar';
import Footer from '../../footer/Footer';

const MerchantLogIn = ({setUser}) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate =useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch ("/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then((r)=>{
      return r.json()
    })
    .then((data) =>{
      if(data.error){
        alert(data.error)
      }else{
        console.log(data)
        setUser(data)
        localStorage.setItem("userId", data.id)
        navigate('/merchant')
      }
     

    })
      
  }


  return (
    <>
    <MainBar/>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='formation-control' onSubmit={handleSubmit}>
          <input type="email"
                placeholder='email'
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
          />
           <input type="password"
                autoComplete="current-password"
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)} 
          />
           <p className="signup-link"> Don't have account? <Link className='linkp'  to='/register'> Become a Member!</Link></p>
            <button  type='submit'>Log In</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default MerchantLogIn