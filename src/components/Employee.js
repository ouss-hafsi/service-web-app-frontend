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
              <Card style={{ width: "18rem"}}>
                <Card.Img className="box-picture" variant="top" src={employee.pictureUrl} />
                <Card.Body>
                  <Card.Title className="employee-name">{employee.firstname} {employee.lastname}</Card.Title>
                  <Card.Text className="location-text"><span>Location:</span>  {employee.location}</Card.Text>
                  <Card.Text className="category-text"> <span>Category:</span> {employee.category}</Card.Text>
                  <div className="read-save-block" >
                  <Link to={`/employees/${employee._id}`} className='link-read-more' ><button className='read-more'>Read more</button></Link>

                  <button  className='save-information' disabled={disabled}  onClick={(id) => { 
                    saveInfo(employee._id)
                    doubleCheck()
                }}>{disabled ? 'Saved' :  'Save Information' }</button>



                  </div>
                </Card.Body>
              </Card>
            </div>
        </>
    )
}

export default Employee;