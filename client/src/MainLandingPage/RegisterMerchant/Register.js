
import React, {useState} from 'react'
import Footer from '../footer/Footer';
import MainBar from '../MainBar/MainBar';

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
  return (
    <>
    <MainBar/>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='formation-control'>
          <input type='text' name='username'  placeholder='Username' value ={username} required id="username" onChange={(e) => setUsername(e.target.value)} />
              <input type='text' name='firstname'  placeholder='FirstName' value ={firstname} required id="firstname" onChange={(e) => setFirstname(e.target.value)}/>
              <input type='text' name='lastname' placeholder='LastName' value ={lastname} required id="lastname" onChange={(e) => setLastname(e.target.value)} />
              <input type='email' name='email' placeholder='Email' value ={email} required id="email"  onChange={(e) => setEmail(e.target.value)} />
              <input type='password' name='password' placeholder='Password'value={password}  onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Register
