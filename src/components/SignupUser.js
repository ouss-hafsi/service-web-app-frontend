import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignupUser = () => {


  const navigate = useNavigate();
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
    axios.post('https://ouss-service-app.herokuapp.com/users/signup', user)
    .then(() => {
        console.log("the post is" + user)
        navigate('/login')
    })
}   


  return (
    <>
      
      <form onSubmit={handleSubmit} className="create-form">

      <div>
        <label className="create-label" htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" id="username" placeholder="name" />
      </div>

      <div>
        <label className="create-label" htmlFor="image">email</label>  
        <input onChange={handleChange} type="email" id="email" placeholder="image-url" />
      </div>  

      <div>
        <label className="create-label" htmlFor="description">password</label>
        <input onChange={handleChange} type="password" id="password" placeholder="description" />
      </div>


        <button className="create-button" type='submit'>Create</button>
      </form>
    </>
  );
};

export default SignupUser;
