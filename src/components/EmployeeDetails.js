
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';





const EmployeeDetails = () => {
  const { id } = useParams();
  const [employeeInfo, setEmployeeInfo] = useState(null);
  useEffect(() => {
    const config = localStorage.getItem("Token");
    const config1 = { headers: { Authorization: `Bearer ${config}` } };
    // console.log("this is config", config);
    axios
      .get(`https://service-web-app-backend.onrender.com/employees/${id}`, config1)
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
<div className='discription-box'>
  <Card className='card-background ' style={{ width: '28rem'}}>
      <Card.Img variant="top"  src={employeeInfo.pictureUrl} />
      <Card.Body>
        <Card.Title className="employee-info" ><span >Name: </span>{employeeInfo.firstname} {employeeInfo.lastname}</Card.Title>
        <Card.Text className='email-details-info'><span>Email: </span>{employeeInfo.email}</Card.Text>
        <Card.Text className='description-info'><span>Location: </span>{employeeInfo.location}</Card.Text>
        <Card.Text className='phonenumber-info'><span>Phone number: </span>{employeeInfo.phonenumber}</Card.Text>
      </Card.Body>
  </Card>
</div>
    </>
  );
};

export default EmployeeDetails;

