import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Search from "./Search";


const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [query, setQuery] = useState("");

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
      axios
        .get(`https://ouss-service-app.herokuapp.com/employees`, config1)
        .then((res) => {
          console.log(res.data);
          setEmployee(res.data);
        });
    });
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
      <h1>
        welcom:<Link to={`/users/${userId}`}> {username}</Link>
      </h1>
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
