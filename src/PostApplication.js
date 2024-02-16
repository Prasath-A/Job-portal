import React, { useEffect, useState } from 'react'
import { Link ,Route, Routes} from 'react-router-dom';
import "./postapplication.css"
import Addpost from './Addpost';
const PostApplication = ({postedjob}) => {
  
   

  
  //  const handlecurrentuser=()=>{
  //   setPostedjob(currentuser.posted);
  //  }
  //  handlecurrentuser();
  return (
    <div>
      <h1>Posted Jobs</h1>

      <Link to="addpost">Post job</Link>
      
       <ul style={{"listStyleType":"none"}}>
          { postedjob.map((item,id)=>(
            
            <li key={id}>
              <h1>{item.role}</h1>
              <h5>{item.description}</h5>
              <button>remove</button>
            </li>
          ))

          }
       </ul>
      
     
    </div>
  )
}

export default PostApplication