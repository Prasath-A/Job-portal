import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams ,useNavigate} from 'react-router-dom';
const Applyjob = ({EMP_API,data}) => {
    const navigate = useNavigate();
    const {id}=useParams();
    const [apli_name,setalpi_name]=useState('');
    const [apli_current,setApli_current]=useState('');
    const [apli_ex,setApli_ex]=useState(0);
    const [candi_id,setCandi_id]=useState(0);
    const [jobprovider,setJobprovider]=useState([]);
    useEffect(()=>{
        
      
    const getjobprovider=()=>{
              setJobprovider(data.filter(item=>item.id==id));
    }
    getjobprovider();
},[])
    const handleapplyjob=async(e)=>{
        e.preventDefault();
        setCandi_id(prev=>prev+1);
        const application={
            name:apli_name,
            currently_doing:apli_current,
            experience:apli_ex,
            candidate_id:candi_id
        }
        try{
        const response=await axios.patch(`${EMP_API}/app/${id}`,application);
        }
        catch{
            console.log("application patch error");
        }
        navigate('/userlogin');
      }
  return (
    <div>
        <h1>Applyjob</h1>
        <h2>{jobprovider.role}</h2>
        <p>{jobprovider.desciption}</p>
        <form onSubmit={handleapplyjob}>
            <label>Name</label>
            <input type='text' onChange={(e)=>{setalpi_name(e.target.value)}}/>
            <label>Currently</label>
            <input type='text' onChange={(e)=>{setApli_current(e.target.value)}}/>
            <label>experience</label>
            <input type='number' onChange={(e)=>{setApli_ex(e.target.value)}}/>
            <button type='submit'>apply</button>
        </form>

    </div>
    
  )
}

export default Applyjob