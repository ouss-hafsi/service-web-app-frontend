import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Employee = ({saveInfo, employee}) => {

    const [disabled, setDisabled] = useState(false)

    function doubleCheck() {
        const getEmployee = localStorage.getItem('employee')
        const employeeArr = JSON.parse(getEmployee) 
            // console.log('DoubleCheck Here!!')
        if(employeeArr ) {
            console.log('employeeArr', employeeArr)
            const checkEmployee = employeeArr.find(employees => employees._id === employee._id) 
            console.log('check Employee', checkEmployee)
            if (checkEmployee) {
                return setDisabled(true)
            } 
        }
    
    }

    useEffect(() => {
        doubleCheck()
    },[])


    return(
        <>
        <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={employee.pictureUrl} />
                <Card.Body>
                  <Card.Title>{employee.firstname}</Card.Title>
                  <Card.Text>{employee.location}</Card.Text>
                  <p><Link to={`/employees/${employee._id}`}>read More</Link></p>

                  <button disabled={disabled}  onClick={(id) => {
                saveInfo(employee._id)
                doubleCheck()
                
            }}>{disabled ? 'Saved' :  'Save Information' }</button>
                </Card.Body>
              </Card>
            </div>
        </>
    )
}

export default Employee;