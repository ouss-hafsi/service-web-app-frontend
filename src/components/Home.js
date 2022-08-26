import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Search from "./Search";


const Home = () => {

   
  const [employee, setEmployee] = useState([]);
  const [query, setQuery] = useState("");
  const [disabled, setDisabled] = useState(false)
  const [savedEmployee, setSavedEmployee] = useState([])

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
    setSavedEmployee(findEmployee)
   
  }

//   function doubleCheck() {
//     const getEmployee = localStorage.getItem('employee')
//     const employeeArr = JSON.parse(getEmployee) 
//         // console.log('DoubleCheck Here!!')
//     if(employeeArr ) {
//         console.log('employeeArr', employeeArr)
//         const checkEmployee = employeeArr.find(employees => employees._id === employee.id) 
//         console.log('check Employee', checkEmployee)
//         if (checkEmployee) {
//             return setDisabled(true)
//         } 
//     }

// }
  



  useEffect(() => {
    getData()
    // doubleCheck()
   
  }, []);


  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    const Search = employee.filter((employee) => {
      if (employee.category) {
        const lowerQuery = query.toLowerCase()
        const lowerPostName = employee.category.toLowerCase()
        return lowerPostName.includes(lowerQuery);
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
      <Search handleChange={handleChange} handleSearch={handleSearch}/>
      <div className="posts">
        {employee.map((employee, index) => {
          return (
            <div key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={employee.pictureUrl} />
                <Card.Body>
                  <Card.Title>{employee.firstname}</Card.Title>
                  <Card.Text>{employee.location}</Card.Text>
                  <p><Link to={`/employees/${employee._id}`}>read More</Link></p>
                  <button disabled={disabled}  onClick={(id) => {
                saveInfo(employee._id)
                // doubleCheck()
                
            }}>{disabled ? 'Added to favorite' :  'Add to favorite' }</button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
