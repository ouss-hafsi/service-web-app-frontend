import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignupUser = () => {


  const navigate = useNavigate();
  const [error, setError] = useState()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

function handleChange(event) {
setUser({...user, [event.target.id]: event.target.value })
}

function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://service-web-app-backend.onrender.com/users/signup', user)
    .then(() => {
        console.log("the post is" + user)
        navigate('/login')
    })
    .catch(err => {
      console.log(err.response.data)
      setError(err.response.data);
    });
}   


  return (
    <>
      <div className="signup-format">

      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-form-text">Sign up</h1>

      <div>
        <input onChange={handleChange} type="text" id="username" placeholder="username" />
      </div>

      <div>
        <input onChange={handleChange} type="email" id="email" placeholder="email" />
      </div>  

      <div>
        <input onChange={handleChange} type="password" id="password" placeholder="password" />
      </div>

        <p>{error}</p>
        <button  type='submit'>Submit</button>
      </form>
      </div>
    </>
  );
};

export default SignupUser;
