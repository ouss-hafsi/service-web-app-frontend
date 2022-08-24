import axios from "axios";
import React, { useState } from "react";

const SignupEmployee = () => {



    const [file, setFile] = useState()
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
  
    const submit = async event => {
      event.preventDefault()
  
      const formData = new FormData();
      formData.append("picture", file)
      formData.append("firstname", firstname)
      await axios.post("http://localhost:4000/employees", formData, { headers: {'Content-Type': 'multipart/form-data'}})
    }
  
    return (
       <form onSubmit={submit}>
         <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"></input>
         <input value={firstname} onChange={e => setFirstname(e.target.value)} type="text" placeholder='name'></input>
         <input value={lastname} onChange={e => setLastname(e.target.value)} type="text" placeholder='lastname'></input>
         <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='email'></input>
         <input value={phonenumber} onChange={e => setPhonenumber(e.target.value)} type="text" placeholder='phonenumbere'></input>
         <button type="submit">Submit</button>
       </form>
    )
  }

  
  


export default SignupEmployee;
