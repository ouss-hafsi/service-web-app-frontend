import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const UserInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // const config = localStorage.getItem("Token");
    // const config1 = { headers: { Authorization: `Bearer ${config}` } };
    // console.log("this is config", config);
    axios
      .get(`https://ouss-service-app.herokuapp.com/users/${id}`)
      .then((res) => {
        console.log('this is user data', (res.data));
        setUserInfo(res.data);
      });
  }, []);

  function handleChange(event) {
    setUserInfo({ ...userInfo, [event.target.id] : event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.put(`https://ouss-service-app.herokuapp.com/users/${id}`, userInfo)
    .then(() => {
      window.localStorage.setItem("Username", userInfo.username)
      navigate("/home");
    });
  }


  function handleDelete() {
    axios.delete(`https://ouss-service-app.herokuapp.com/users/${id}`)
    .then(() => {
      localStorage.removeItem('Token')
      localStorage.removeItem('Username')
      localStorage.removeItem('employee')
      navigate('/')
    })
  }

  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <div className="landing-format-user">
    <form className='user-form' onSubmit={handleSubmit}>
      <h1 className="user-form-text">Edit Profile</h1>
      <input type='text' id='username'  value={userInfo.username} onChange={handleChange}></input>
      <input type='email' id='email'  value={userInfo.email} onChange={handleChange}></input>
      <div>
      <button type='submit' className="user-form-edit">Edit</button>
      <button type='button' className="user-form-delete" onClick={handleDelete}>Delete</button>

      </div>
    </form>
    </div>
    
    </>
  );
};

export default UserInfo;
