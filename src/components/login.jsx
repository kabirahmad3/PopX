import { createSearchParams, Link, useNavigate, useSearchParams } from "react-router";
import appstyle from "./login.module.css";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  
  const [searchParams, setSearchParams] = useSearchParams();
  
  const regesteredEmail = searchParams.get('email');
  const regesteredPassword = searchParams.get('password')
  const regesteredName = searchParams.get('name');

  const submitForm = (event) => {
    event.preventDefault();
    const {email, password} = event.target
    
    if (email.value === regesteredEmail && password.value === regesteredPassword) {
      navigate({
        pathname: "/settings",
        search: createSearchParams({
          email: regesteredEmail,
          name: regesteredName
        }).toString()
      });
    } else {
      alert("Incorrect password")
    }
  }
  
  return (
    <>
      <div className={appstyle.container}>
        <div className={appstyle['form-container']}>
          <h1 className={appstyle.heading}>Signin to your PopX account</h1>
          <p className={appstyle.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form name="formData" onSubmit={submitForm}>
            <div className={appstyle['form-group']}>
              <label htmlFor="email" className={appstyle['form-label']}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={appstyle['form-input']}
                placeholder="Enter email address"
                required
              />
            </div>

            <div className={appstyle['form-group']}>
              <label htmlFor="password" className={appstyle['form-label']}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={appstyle['form-input']}
                placeholder="Enter password"
                required
              />
            </div>
            {/* <Link to="/settings"> */}
              <button type="submit" className={[appstyle.btn, appstyle['btn-login']].join(' ')}>Login</button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
