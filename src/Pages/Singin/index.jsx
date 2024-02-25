import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate()

  const nameRef = useRef()
  const passwordRef = useRef()


  function heandleSubmit(e){
    e.preventDefault()
    if (!nameRef || !passwordRef) {
      setError("Barcha maydonlarni to'ldiring");
      return;
    }
    const userInfo = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    }
    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(res=>res.json())
    .then(data =>{
      navigate("/")
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container w-100 mt-5">
      <div className='container w-50'>
        <div className='container w-50'>
          
        </div>
      </div>
      <div className='container w-50'>
        <form onSubmit={heandleSubmit} className='container w-50'>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">User name</label>
            <input ref={nameRef} type="text" className="form-control" id="userName" aria-describedby="emailHelp"/>
          </div>


          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control" id="password"/>
          </div>
          <div className="buttons d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
