import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/users`).then((res) => {
      const config = localStorage.getItem("Token");
      const user = localStorage.getItem("Username");
      setUsername(user);

      const config1 = { headers: { Authorization: `Bearer ${config}` } };

      console.log("this is config", config);
      const usersArr = res.data;
      const loggedOnUser = usersArr.find(
        (user) => user.username === window.localStorage.getItem("Username")
      );
      console.log(loggedOnUser);
      const loggedOnUserId = loggedOnUser._id;
      setUserId(loggedOnUserId);
      setUsername(loggedOnUser.username);
      console.log(loggedOnUserId);
      axios.get(`http://localhost:4000/employees`, config1).then((res) => {
        console.log(res.data);
        setEmployee(res);
      });
    });
  }, []);

  return (
    <>
      <h1>
        welcom:<Link to={`/users/${userId}`}> {username}</Link>
      </h1>
    </>
  );
};

export default Home;
