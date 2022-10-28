// import React, { useState }from 'react'
// 
// import "../../design.css"

// const MerchantLogIn = ({setUser}) => {
//   const[username, setUsername] = useState("");
//   const[password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
    
//     fetch ("/login",{
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }

//   return (
//     <>
   
//       <section className='forms top'>
//         <div className='container'>
//           <div className='sign-box'>
//             <p>Enter your username and password below to log in to your account and use the benefits of our website.</p>
//             <form action='' onSubmit={handleSubmit} >
//             <input type="text"
//                 id="username"
//                 autoComplete="off"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//           />
//               <input type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} 
//           />

//               <div className='flex_space'>
//                 <div className='flex'>
//                   <input type='checkbox' />
//                   <label>Remember Me</label>
//                 </div>
//                 <div className='flex'>
//                   <span>I forgot my password</span>
//                 </div>
//               </div>

//               <button type='submit' className='primary-btn'>
//                 Sign In
//               </button>
//              
//             </form>
//           </div>
//         </div>
//       </section>

     
//     </>
//   )
// }

// 


import React, { useState }from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router';
import MainBar from '../../MainBar/MainBar';
import Footer from '../../footer/Footer';

const MerchantLogIn = ({setUser}) => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate=useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    
    const user = {email, password}
    fetch ("http://localhost:3000/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token
      },
      body: JSON.stringify({ email, password }),
    })
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => setUser(user));
    //     console.log(r);
    //   }
    //   // navigate('/merchant')ret
    // });
    .then(res => res.json()).then(res => {
      let token = res.token;
      console.log("token: ", token);
  })
    .catch((error) => {
    console.log(error.message)
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
           <p> Don't have account? <Link className='linkp'  to='/register'> Become a Member!</Link></p>
            <button  type='submit'>Log In</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default MerchantLogIn