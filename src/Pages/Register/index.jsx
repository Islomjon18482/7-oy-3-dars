import React, { memo } from 'react'
import GoogleLogin from 'react-google-login'
import { GoogleLoginButton } from 'react-social-login-buttons'

const id = "95172988738-9fgrp6pqt54b5i7skt47gl05i8e2pjnf.apps.googleusercontent.com"

function Register() {
  function responseGoogle(response) {
    console.log('Google login successful', response);
    // response dan kerakli ma'lumotlarni olish
  }
  
  function responseGoogleFailure(error) {
    console.error('Google login failed', error);
    // xato haqida foydalanuvchiga xabar berish
  }
  return (
    <div className="container w-100">
      <div className='container w-50'>
        <div className='container w-50'>
          
        </div>
      </div>
      <div className='container w-50'>
        <form className='container w-50'>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">User name</label>
            <input type="text" className="form-control" id="userName" aria-describedby="emailHelp"/>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>

          <div className="mb-3">
            <label htmlFor="repassword" className="form-label">Repassword</label>
            <input type="password" className="form-control" id="repassword"/>
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
