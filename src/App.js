// import logo from './logo.svg';
// import './App.css';
import './index.css'
import React, { useState } from 'react'
import { Routes, useLocation, Route,useNavigate} from "react-router-dom";
import axios from 'axios';




import Home from './components/Home';
import UserInfo from './components/UserInfo';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Login from './components/Login'
import SignupUser from './components/SignupUser';



function App() {
  const location = useLocation()

  const navigate = useNavigate()
 // The signin state
 const [signIn, setSignIn] = useState({
  username: '',
  password: '', 
 })


  const handleChange = (event) => {
    setSignIn ({...signIn, [event.target.id]: event.target.value})
    console.log("signin username is", signIn.username)
   }



   const handleSubmit = (event) => {
    event.preventDefault()
        axios.post(`https://ouss-service-app.herokuapp.com/users/signin`, signIn)
          .then(res => {
            console.log(res)
          // save token to local storage
          window.localStorage.setItem("Token", res.data.token)
          console.log(res.data.token)
          // save email to local storage
          window.localStorage.setItem("Username", signIn.username)
      })
      .then(() => {
          navigate('/home')
      })
      }    
   

  return (
   <>
{location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' ? <Navigation/> : null}

<main>


        <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login handleSubmit={handleSubmit} handleChange={handleChange} signIn={signIn} />} />
          <Route path="/home" element={<Home signIn={signIn}/>} />
          <Route path='/signup' element={<SignupUser/>}/>
          <Route path='/users/:id' element={<UserInfo/>}/>
        </Routes>
      </main>

   </>
  );
}

export default App;