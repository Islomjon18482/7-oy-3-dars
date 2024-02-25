import React, { memo, useRef } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom';

const id = "95172988738-9fgrp6pqt54b5i7skt47gl05i8e2pjnf.apps.googleusercontent.com"

function Register() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const rePasswordRef = useRef()

  const navigate = useNavigate()
  function responseGoogle(response) {
    console.log('Google login successful', response);
    navigate("/")
  }
  
  function responseGoogleFailure(error) {
    console.error('Google login failed', error);
  }

  function heandleSubmit(e){
    e.preventDefault()
    if (!nameRef || !emailRef || !passwordRef || !rePasswordRef) {
      setError("Barcha maydonlarni to'ldiring");
      return;
    }
    const userInfo = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(res=>res.json())
    .then(data =>{
      navigate("/singin")
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
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control" id="password"/>
          </div>

          <div className="mb-3">
            <label htmlFor="repassword" className="form-label">Repassword</label>
            <input ref={rePasswordRef} type="password" className="form-control" id="repassword"/>
          </div>
          <div className="buttons d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>
            <GoogleLogin 
              clientId={id}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              onSuccess={responseGoogle}
              onFailure={responseGoogleFailure}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
