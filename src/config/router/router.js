import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import Dashboard from "../../pages/dashboard";
 import { TextField, Button } from '@material-ui/core';
 import Login from "../../components/login";
 import Appdrawer from "../../pages/home";

function AppRouters(){
    return <>
    <Router>
        <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="dashboard/:id" element = {<Dashboard />} />   
        <Route path="/home" element={<Appdrawer />} />
        
        </Routes>
    </Router>    
    </>
}
export default AppRouters; 