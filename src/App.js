
import "./index.css";
import './responsive.css';
import React, { useState } from "react";
import { Routes, useLocation, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import SignupUser from "./components/SignupUser";
import EmployeeDetails from "./components/EmployeeDetails";
import MyEmployees from "./components/MyEmployees";
import EmployeeSignup from "./components/EmployeeSignup";

function App() {

  const [defaultColor, setDefaultColor] = useState("Default");
  function showText(event) {
    setDefaultColor(event.target.value);
    console.log(defaultColor)
  }
  const location = useLocation();
  // console.log(location)

  const navigate = useNavigate();
  // The signin state
  const [error, setError] = useState('');
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });

 
  

  const handleChange = (event) => {
    setSignIn({ ...signIn, [event.target.id]: event.target.value });
    console.log("signin username is", signIn.username);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = signIn.username.toLowerCase()
    signIn.username = val


    axios.post(`https://service-web-app-backend.herokuapp.com/users/signin`, signIn)
    
      .then((res) => {

        if(res.data !== 'The provided username or password is incorrect') {

          console.log(res);
          // save token to local storage
          window.localStorage.setItem("Token", res.data.token);
          console.log(res.data.token);
          // save email to local storage
          window.localStorage.setItem("Username", signIn.username);
          navigate("/home");
          setError(null)

        } else {
          navigate("/login");
          setError('Provided email or password is incorrect.')
        }
      })

      .catch(err => {
        console.log(error)
        setError("Provided email or password is incorrect.");
      });
  };

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <Navigation defaultColor={defaultColor} showText={showText}/>
      ) : null}

      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login error={error} handleSubmit={handleSubmit} handleChange={handleChange} signIn={signIn}/>}/>
          <Route path="/home" element={<Home defaultColor={defaultColor} signIn={signIn} />} />
          <Route path="/signup" element={<SignupUser />} />
          <Route path="/users/:id" element={<UserInfo />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/myemployees" element={<MyEmployees />} />
          {/* <Route path="/employeesignup" element={<EmployeeSignup />} /> */}

        </Routes>
      </main>
    </>
  );
}

export default App;
