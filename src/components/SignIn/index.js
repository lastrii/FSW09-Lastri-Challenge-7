import * as React from 'react';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if(response.tokenId) {
        localStorage.setItem("token", token);
        setIsLoggedIn(token);
    }
  }

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  }

  return (
    <React.Fragment>    
    {!isLoggedIn ? (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={haldleSuccessGoogle}
        onFailure={haldleFailureGoogle}
        cookiePolicy={'single_host_origin'}
        /> 
    ):(
      <Navigate to="/listcars" />
    )}
    </React.Fragment>
  );
}

export default SignIn;