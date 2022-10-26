
import React, {useState} from 'react'
import Footer from '../footer/Footer';
import MainBar from '../MainBar/MainBar';

const Register = ({ setUser }) => {

    const[fullname, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  
    const[passwordConfirmation, setPasswordConfirmation] = useState("");
    const[role, setRole] = useState("")



    function handleSubmit(e) {
      e.preventDefault()
      
      fetch("/signup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          }, 
          body: JSON.stringify({
            fullname,
            email,
            password,
            passwordConfirmation,
            role,
          }),
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
          <form className='formation-control' onSubmit={handleSubmit}>
          <input type='text' name='fullname'  placeholder='Full name' value ={fullname} required id="fullname" onChange={(e) => setFullName(e.target.value)} />
              <input type='text' name='email'  placeholder='Email' value ={email} required id="email" onChange={(e) => setEmail(e.target.value)}/>
              <input type='text' name='password' placeholder='Password' value ={password} required id="password" onChange={(e) => setPassword(e.target.value)} />
              <input type='email' name='password' placeholder='Password Confirmation' value ={passwordConfirmation} required id="passswordconfirmation"  onChange={(e) => setPasswordConfirmation(e.target.value)} />
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
