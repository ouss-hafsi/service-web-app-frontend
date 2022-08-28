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
      <div className="signup-format">

      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-form-text">Sign up</h1>

      <div>
        {/* <label className="create-label" htmlFor="name">Name</label> */}
        <input onChange={handleChange} type="text" id="username" placeholder="username" />
      </div>

      <div>
        {/* <label className="create-label" htmlFor="image">email</label>   */}
        <input onChange={handleChange} type="email" id="email" placeholder="email" />
      </div>  

      <div>
        {/* <label className="create-label" htmlFor="description">password</label> */}
        <input onChange={handleChange} type="password" id="password" placeholder="password" />
      </div>


        <button  type='submit'>Submit</button>
      </form>
      </div>
    </>
  );
};

export default SignupUser;
