import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import ListCars from '../ListCars';

export default function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");  
    const navigate = useNavigate();

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

      function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.clear();
        navigate("/");
        // window.location.reload();
        <GoogleLogout/>
      }

    return (
        <Box sx={{ flexGrow: 1 }}>            
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Aplikasi Cars
                    </Typography>
                    {!isLoggedIn ? (
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={haldleSuccessGoogle}
                            onFailure={haldleFailureGoogle}
                            cookiePolicy={'single_host_origin'}
                            /> 
                        ) : (
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        )}
                </Toolbar>
            </AppBar>
            {!isLoggedIn ? (
                <p>Data Kosong</p>                
            ) : (
                <ListCars/>
            )}
        </Box>
    );
}
