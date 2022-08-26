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

  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' id='username'  value={userInfo.username} onChange={handleChange}></input>
      <input type='email' id='email'  value={userInfo.email} onChange={handleChange}></input>
      <button type='submit'>edit</button>
    </form>
    
    </>
  );
};

export default UserInfo;
