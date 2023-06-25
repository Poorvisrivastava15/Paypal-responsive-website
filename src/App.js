import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Header from "./components/header"
import Home from "./components/home"
// import Login from "./components/login"
import Register from "./components/Register"
import Paypalactivity from "./Paypalactivity"
// import ContactUs from "./components/contactus";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      
       <Header />
       <Routes>
         <Route element={<Navigate to="/homepage" />} path="/" />
         <Route element={<Home></Home>} path="homepage" />
         {/* <Route element={<Login></Login>} path="login" /> */}
         <Route element={<Register />} path="register" />
         <Route element={<Paypalactivity/>} path="Paypalactivity" />
         {/* <Route element={<ContactUs/>} path="contactus" /> */}
       </Routes>
       
     </BrowserRouter>
      
    </div>
  );
};

export default App;
