
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Navigation = ({defaultColor,showText}) => {
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
    axios.get(`https://service-web-app-backend.onrender.com/users`).then((res) => {
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
      <nav className={`nav ${defaultColor}`}><Link to="/" className="brand">Easy-Fix</Link>
        <ul className={active}>
          <li className="nav-item"><Link to="/home" onClick={hide} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/myemployees"  className="nav-link" onClick={hide} >My employees</Link></li>
          <li className="nav-item"><Link to={`/users/${userId}`} onClick={hide} className="nav-link">welcome {username}</Link></li>
          <li className="nav-item nav-link log-out " onClick={logOut} >Log out</li>
          <li > <select  onChange={showText}>
            <option value="Default">Default</option>
            <option value="red">Red</option>
          </select></li>
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
