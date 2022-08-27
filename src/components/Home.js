import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import clean1 from '../images/clean-1.png'
import plumber from '../images/plumber.png'

import ListGroup from "react-bootstrap/ListGroup";
import Search from "./Search";
import Employee from "./Employee";


const Home = () => {

   
  const [employee, setEmployee] = useState([]);
  const [query, setQuery] = useState("");
  
  // const [savedEmployee, setSavedEmployee] = useState([])

  function getData() {
    const config = localStorage.getItem("Token");
    const config1 = { headers: { Authorization: `Bearer ${config}` } };
    axios
      .get(`https://ouss-service-app.herokuapp.com/employees`, config1)
      .then((res) => {
        // console.log(res.data);
        setEmployee(res.data);
      });
  }

  function saveInfo(id) {
    const findEmployee = employee.find( employee => employee._id === id)
    if(localStorage.getItem('employee')) {
      // if employee not empty push the new element
      const getEmployee = localStorage.getItem('employee')
      const employeeArr = JSON.parse(getEmployee)
      employeeArr.push(findEmployee)
      localStorage.setItem('employee',JSON.stringify(employeeArr))
    } else {
      // else if empty create a new array with the first elemenet
      localStorage.setItem('employee',JSON.stringify([findEmployee]))
    }
    // setSavedEmployee(findEmployee)
   
  }


  



  useEffect(() => {
    getData()
  
   
  }, []);


  function handleChange(event) {
    setQuery(event.target.value);
    console.log(query)
  }

  function handleSearch(event) {

    event.preventDefault();
    const Search = employee.filter((employee) => {
      if (employee.category) {
        const lowerQuery = query.toLowerCase()
        const lowerEmCategory = employee.category.toLowerCase()
        return lowerEmCategory.includes(lowerQuery);
      }
    });
    console.log(Search);
    setEmployee(Search);
    
  }



  if (!employee) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <Carousel>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={clean1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p className="o">NEW OFFER WE PROVIDE HOUSE CLEANING NOW.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={plumber}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 ></h3>
          <p className="o">NEW OFFER WE PROVIDE HOUSE CLEANING NOW.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={clean1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p className="o">
            NEW OFFER WE PROVIDE HOUSE CLEANING NOW.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <Search handleChange={handleChange} handleSearch={handleSearch}/>
      <div className="employee-box">
        {employee.map((employee, index) => {
          return (
            <Employee saveInfo={saveInfo} employee={employee} key={index}/>
          );
        })}
      </div>
    </>
  );
};

export default Home;
