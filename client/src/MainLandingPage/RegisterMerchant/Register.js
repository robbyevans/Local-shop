import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import MainBar from '../MainBar/MainBar';

const Register = ({ setUser }) => {

    const[full_name, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  
    const[password_confirmation, setPasswordConfirmation] = useState("");
    const[role, setRole] = useState("")
 
    const navigate = useNavigate();


    function handleSubmit(e) {
      e.preventDefault()
      
      fetch("/signup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          }, 
          body: JSON.stringify({
            full_name:full_name,
            email:email,
            password:password,
            password_confirmation:password_confirmation,
            role:role
          }),
      })
       .then((r) => {
        console.log(r)
         if (r.ok) {
           r.json().then((user) => {
            console.log(user)
            setUser(user)
            navigate("/mlog-in")
           }
          
           
           );
         } 
        });
    
    }
  return (
    <>
    <MainBar/>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='formation-control' onSubmit={handleSubmit}>
            <input type='text' name='full_name' placeholder='Full name' value={full_name} required id="fullname" onChange={(e) => setFullName(e.target.value)} />
            
            <input type='email' name='email' placeholder='Email' value={email} required id="email" onChange={(e) => setEmail(e.target.value)} />
            
            <input type='password' name='password' placeholder='Password' value={password} required id="password" onChange={(e) => setPassword(e.target.value)} />
            
            <input type='password' name='password' placeholder='Password Confirmation' value={password_confirmation} required id="passswordconfirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} />
            
              <input type='text' name='role' placeholder='Role'value={role}  onChange={(e) => setRole(e.target.value)} />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Register