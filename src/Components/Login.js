import { Button, Input } from '@mui/material'
import React, { useState } from 'react'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    
    const sendLoginData = (data) =>
    {
        fetch("http://localhost:3002/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
    }

  return (
    <div>
        <Input placeholder='Username' onChange={(event)=>
        {
            setUserName(event.target.value);
        }}/>
        <Input type='password' placeholder='password' onChange={(event) => 
        {
            setPassword(event.target.value);
        }}/>
        <Button onClick={()=>
        {
            

            const data = {
                username: userName,
                password:password,
                bookmarks:[],
                date:new Date()
            }

            

            sendLoginData(data);

           
            
        }}>Submit</Button>
    </div>
  )
}

export default Login