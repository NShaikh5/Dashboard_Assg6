import React from "react";
import { TextField, Button } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppRouters from "../config/router/router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";

function Login(props){
    
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const login = () => {
    let obj = {
      
      email,
    
    };
    console.log(obj);
    navigate(`/dashboard/ ${email}`, { state: obj });

  };
    return<>
    <div className='App'>
      <TextField onChange={(e) => setEmail(e.target.value)} label="Enter Email" variant="filled" color="primary" focused /> <br />
      <TextField type="password" label="Enter Password" variant="filled" color="primary" focused /> <br />  <br />
      <Button onClick={login} variant="contained">LogIn</Button>
    </div>
    </>
}
export default Login;