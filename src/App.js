// import logo from './logo.svg';
// import './App.css';
import './index.css'
import React, { useState } from 'react'
import { Routes, Route,useNavigate} from "react-router-dom";
import axios from 'axios';




import Home from './components/Home';
import SignupEmployee from './components/SignupEmployee';
import LandingNav from './components/Landing';
import UserInfo from './components/UserInfo';



function App() {

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
        axios.post(`http://localhost:4000/users/signin`, signIn)
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


<main>
        <Routes>
        <Route path="/" element={<LandingNav handleSubmit={handleSubmit} handleChange={handleChange} signIn={signIn} />} />
          <Route path="/home" element={<Home signIn={signIn}/>} />
          <Route path="/signupem" element={<SignupEmployee/>} />
          <Route path='/users/:id' element={<UserInfo/>}/>
        </Routes>
      </main>

   </>
  );
}

export default App;
