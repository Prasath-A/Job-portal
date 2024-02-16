import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
const Login = ({data,setPostedjob,setid,setPass,setUsername,username,pass,setCurrentuser,userdata}) => {
    const navigate = useNavigate();
    // const [fetchEmpdata,setFetchEmpData]=useState([]);
    // const [fetchUserdata,setFetchUserData]=useState([]);
    
    // const [username,setUsername]=useState("");
    // const [pass,setPass]=useState("");
    const employeelogin=(e)=>{
            let valid=0;
            e.preventDefault();
           // const cheakusername=fetchdata.map((item)=>)
        //        console.log(fetchEmpdata[0])
         if(data){
              data.forEach(element => {
                console.log(element.name,element.password);
               if(element.name==username && element.password==pass){
                     setCurrentuser(element);
                     setPostedjob(element.posted);
                     setid(element.id);
                     console.log(element);
                    navigate("/employeelogin");
                    valid=1;
               }
           });
           if(valid==0){
            alert("Invalid");
           }
          }
           
            
    }
    const userlogin=(e)=>{
        e.preventDefault();
         let valid =0;
       
          userdata.forEach(element => {
            // console.log(element.name,element.password);
            if(element.name==username && element.password==pass){
                 navigate("/userlogin");
                 valid =1;
            }
        });
        if(valid==0){
            alert("Invalid");
           }
    }

   
  return (
    <div className='main'>
       

  <div class="container">

   <form onSubmit={employeelogin}>

    <h1>Employess</h1>

    <div class="uname">

     <label>username</label>

     <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>

    </div>

    <div class="pass">

     <label>password</label>

     <input type="password" onChange={(e)=>{setPass(e.target.value)}}/>

    </div>

    <div class="btn">

     <button type="submit">Login</button>

     <Link to='/register'>Register</Link>

    </div>

   </form>

  </div>

  <div class="container">

   <form onSubmit={userlogin}>

    <h1>User</h1>

    <div class="uname">

     <label>username</label>

     <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>

    </div>

    <div class="pass">

     <label>password</label> <input type="password" onChange={(e)=>{setPass(e.target.value)}} />

    </div>

    <div class="btn">

     <button type="submit">Login</button>

     <Link to='/register'>Register</Link>

    </div>

   </form>

  </div>


    </div>
  )
}

export default Login