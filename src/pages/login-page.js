import React from 'react';
import './login-page.css';
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        loginWithPopup,
        logout,
      } = useAuth0();

      console.log(user);


    const handleLoginClick = async () => {
    loginWithRedirect()
    }

    if (isLoading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Oops... {error.message}</div>;
      }
    
      if (isAuthenticated) {
        return (
          <div>
            Hello {user.name}
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Log out
            </button>
          </div>
        );
      }

    return(
        <>
        <div className='container' >
                <div className='row' >
                    <div className="col-6">
                     <Link style={{textDecoration: 'none',textAlign:"center"}} to="/csvfile" > <h2 > CSV File </h2></Link>
                    </div>
                    <div className="col-6">
                     <Link style={{textDecoration: 'none',textAlign:"center"}} to="/donut" > <h2 > Donut </h2></Link>
                    </div>
                </div>
            </div>
        <div className='outerComponent' >
            <div className='innerComponent' >
            <label>User Name</label>
                <div style={{width:"290px"}} >
                    <TextField fullWidth />
                </div>
                <br />
                <label>Password</label>
                <div style={{width:"290px"}} >
                    <TextField fullWidth type={'password'} />
                </div>

                {isAuthenticated?
                <button onClick={() => logout({ returnTo: window.location.origin })}>Log out </button> :
                <button className='btn-primary login-button' onClick={handleLoginClick} >Login</button> }
                
            </div>
        </div>
  
        </>
    )
}

export default LoginPage;