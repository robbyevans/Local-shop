import React, {useState} from 'react'
import "../Login/design.css"

const Register = ({ setUser }) => {

    const[username, setUsername] = useState("");
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
              username,
              firstname,
              lastname,
              email,
              password,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => setUser(user));
            }
          });
      }
  return  (
    <>
      
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Do you want to be our member? Create your account, it takes less than a minute.</p>
            <form onSubmit={handleSubmit}>
              
              <input type='text' name='username'  placeholder='Username' value ={username} required id="username" onChange={(e) => setUsername(e.target.value)} />
              <input type='text' name='firstname'  placeholder='FirstName' value ={firstname} required id="firstname" onChange={(e) => setFirstname(e.target.value)}/>
              <input type='text' name='lastname' placeholder='LastName' value ={lastname} required id="lastname" onChange={(e) => setLastname(e.target.value)} />
              <input type='email' name='email' placeholder='Email' value ={email} required id="email"  onChange={(e) => setEmail(e.target.value)} />
              <input type='password' name='password' placeholder='Password'value={password}  onChange={(e) => setPassword(e.target.value)} />
              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Register
