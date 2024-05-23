import React from 'react';
import { useState } from 'react';
import axios from "axios"
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
    let result= await fetch(
      'http://localhost:3000/register',{
        method:"post",
        body:JSON.stringify({email,password}),
        headers: {
          'Content-Type':'application/json'
        } 
      } )

      setPassword('')
      setEmail('')

    } catch(err) {
      console.log('error while registering')
    }
    
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <section className="vh-100">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fa fa-facebook"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fa fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fa fa-linkedin"></i>
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value={rememberMe} id="form2Example3" onChange={() => setRememberMe(!rememberMe)} />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <a href="1_signup.html" className="link-danger">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;