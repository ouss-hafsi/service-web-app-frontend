
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// import {ImPlay3} from 'react-icons/im'


// import ListGroup from 'react-bootstrap/ListGroup';




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
{/* <p>First name: {employeeInfo.firstname}</p>
<p>Last name: {employeeInfo.lastname}</p>
<p>Email: {employeeInfo.email}</p>
<p>Location: {employeeInfo.location}</p>
<p>Phone number: {employeeInfo.phonenumber}</p> */}



<div className='discription-box'>


{/* <Container> */}
  <Card className='card-background ' style={{ width: '28rem'}}>
      <Card.Img variant="top"  src={employeeInfo.pictureUrl} />
      <Card.Body>
        <Card.Title className='desc-title'>{employeeInfo.firstname} {employeeInfo.lastname}</Card.Title>
        <Card.Text className='email-details'>{employeeInfo.email}</Card.Text>
        <Card.Text className='description'>{employeeInfo.location}</Card.Text>
        <Card.Text className='description'>{employeeInfo.phonenumber}</Card.Text>
  </Card.Body>
    </Card>

{/* </Container> */}
         </div>
    </>
  );
};

export default EmployeeDetails;

