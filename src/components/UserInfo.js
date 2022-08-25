import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const UserInfo = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const config = localStorage.getItem("Token");
    const config1 = { headers: { Authorization: `Bearer ${config}` } };
    console.log("this is config", config);
    axios
      .get(`https://ouss-service-app.herokuapp.com/users/${id}`, config1)
      .then((res) => {
        console.log(res.data);
        setUserInfo(res);
      });
  }, []);

  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  return <></>;
};

export default UserInfo;
