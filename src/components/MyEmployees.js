import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const MyEmployees = () => {
      // get data from local storage 
     // parse data  

     const getEmployee = localStorage.getItem('employee')
     const employeesArr = JSON.parse(getEmployee) 
     const [_, setLocalState] = useState(employeesArr)
     

function removeMovie(id) {
        const deleteEmployee = employeesArr.find(employee => employee._id === id)
        // console.log(deleteMovie)
        let arr =[]
     
      
        for (let i = 0; i <= employeesArr.length - 1; i++) {
            if (employeesArr[i]._id !== deleteEmployee._id) {
                // console.log(moviesArr[i].id)
                // console.log(deleteMovie.id)
                arr.push(employeesArr[i])
                // console.log(moviesArr)
             }
        }  

           localStorage.setItem('employee', JSON.stringify(arr))
           if(arr.length < 1) {
              localStorage.removeItem('employee');   
            }

            setLocalState(arr)
    }
    
function deleteAll() {
      localStorage.removeItem('employee');
       setLocalState([])
    }

     if(!employeesArr) {
        return <p className='nothing-yet'>You didn't add anything yet</p>
     }
  
    return (
        <>
<div className='fav-container'>  



  <Container>
  <Row xs={1} md={4} lg={4} xl={4} className='g-4'>
  <button className='fav-clear' onClick={deleteAll}>Delete all</button>  
  </Row>
    <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
    
    {employeesArr.map((employee,index) => {
            return(
     <Col key={index}>
            <Card className='fav-card h-100'  >
                {employee.pictureUrl && (
               <Card.Img
                variant='top'
                src={employee.pictureUrl ? employee.pictureUrl : ''}
                alt={employee.firstname}
            />
        )}
        <Card.Body>
            {employee.pictureUrl ? (
                ''
            ) : (
                <Card.Title>No Image Available</Card.Title>
            )}
            <Card.Text className='fav-text'>{employee.firstname}</Card.Text>
        </Card.Body>

        <Card.Footer>
		   <Button className='fav-button' onClick={()=> {removeMovie(employee._id)}} variant='outline-dark'>
					Remove
			</Button>
		</Card.Footer>
    </Card>
</Col>
        
            )
        })}
        
        
        </Row>  

    </Container>

 </div>



 

        </>
    )
}

export default MyEmployees;