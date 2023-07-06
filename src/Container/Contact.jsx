import React, { useState } from 'react'
import Navbar from './Navbar'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorEmail(false);
    setErrorMsg(false);
    setErrorName(false);

    if (name.length <=4) {
      setErrorName(true);
    }

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    if (!isValidEmail(email)) {
      setErrorEmail(true);
    }

    if (msg === "") {
      setErrorMsg(true);
    } 
    
    
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to Contact page</h1>
        <div>
          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
              <p>{errorName? "Name error":""}</p>
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <p>{errorEmail ?"Email error" :""}</p>
            </div>

            <div>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)}> </textarea>
              <p>{errorMsg ? "NO message":""}</p>
            </div>

            <button type='submit' >Submit</button>
            
          </form>
        </div >
      </div ></>
  )
}

export default Contact
