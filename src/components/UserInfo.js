import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const UserInfo = ({ token }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // axios.get(`http://localhost:4000/users`)
        // .then(res => {
          const config = localStorage.getItem('Token')
        //   const user = localStorage.getItem('Username')
        //   setUsername(user)

          const config1 = {headers: {Authorization: `Bearer ${config}`}}
          
          console.log('this is config', config)
            // const usersArr = res.data
            // const loggedOnUser = usersArr.find(user => user.username === window.localStorage.getItem('Username'))
            // console.log(loggedOnUser)
            // const loggedOnUserId = loggedOnUser._id
            // setUsername(loggedOnUser.username)
            // console.log(loggedOnUserId)
            axios.get(`http://localhost:4000/users/${id}`, config1 )
                .then(res => {
                  console.log(res.data)
                    setUserInfo(res)
                })
        // })
    }, [])
  
  

  
    if (!userInfo) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <>
      </>
    );
  };
  
  export default UserInfo;