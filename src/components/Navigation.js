///////Navigation.js
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";

import React from "react";
import axios from "axios";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
// import {ImGithub} from 'react-icons/im'

const Navigation = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggle");
  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    // Toggle Animation
    toggleIcon === "nav-toggle"
      ? setToggleIcon("nav-toggle toggle")
      : setToggleIcon("nav-toggle");
  };

  function hide() {
  	setActive('nav-menu')
  	setToggleIcon('nav-toggle')
  }


  useEffect(() => {
    axios.get(`https://ouss-service-app.herokuapp.com/users`).then((res) => {
      const config = localStorage.getItem("Token");
      const config1 = { headers: { Authorization: `Bearer ${config}` } };

      // console.log("this is config", config);
      const users = res.data;
      const loggedInUser = users.find(
        (user) => user.username === window.localStorage.getItem("Username")
      );
      // console.log(loggedInUser);
      const loggedInUserId = loggedInUser._id;
      setUserId(loggedInUserId);
      setUsername(loggedInUser.username);
      // console.log(loggedInUserId);
    });
  }, []);


  function logOut() {
    localStorage.removeItem('Token')
    localStorage.removeItem('Username')
    localStorage.removeItem('employee')
    navigate('/')

  }


  return (
    <>
      <nav className="nav"><Link to="/" className="brand">Fix<span>It</span></Link>
        <ul className={active}>
          <li className="nav-item"><Link to="/home" onClick={hide} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/myemployees"  className="nav-link">My employees</Link></li>
          <li className="nav-item"><Link to={`/users/${userId}`} onClick={hide} className="nav-link">welcome {username}</Link></li>
          <li className="nav-item nav-link" onClick={logOut} >Log out</li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
