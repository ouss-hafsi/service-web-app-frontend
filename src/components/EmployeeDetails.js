
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";
import axios from "axios";


const EmployeeDetails = () => {
  const { id } = useParams();
  const [employeeInfo, setEmployeeInfo] = useState(null);
  useEffect(() => {
    const config = localStorage.getItem("Token");
    const config1 = { headers: { Authorization: `Bearer ${config}` } };
    // console.log("this is config", config);
    axios
      .get(`https://ouss-service-app.herokuapp.com/employees/${id}`, config1)
      .then((res) => {
        console.log('this is user data', (res.data));
        setEmployeeInfo(res.data);
      });
  }, []);


  if (!employeeInfo) {
    return <h1>Loading...</h1>;
  }




  return (
    <>
<p>First name: {employeeInfo.firstname}</p>
<p>Last name: {employeeInfo.lastname}</p>
<p>Email: {employeeInfo.email}</p>
<p>Location: {employeeInfo.location}</p>
<p>Phone number: {employeeInfo.phonenumber}</p>
    </>
  );
};

export default EmployeeDetails;

