import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Userlogin = ({data,userdata}) => {
  const [jobs,setjobs]=useState([]);
  const [searchresults,setSearchResults]=useState([]);
  const [search,setsearch]=useState('');

  
  useEffect(()=>{
      const getjobs=()=>{
             data.forEach(element => {
                  element.posted.forEach(item=>{
                    setjobs(prev=>[...prev,item])
                    setSearchResults(prev=>[...prev,item]);
                  })
             });
             console.log("jobs available",jobs);
            // setSearchResults(jobs);
      }
      getjobs();
  },[])
  useEffect(() => {
    const filteredResults = jobs.filter(
      (item) =>
         item.role.toLowerCase().includes(search.toLowerCase()) 
        // item.description.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [jobs, search]);
  return (
    <div>
      <h3>Hi,Dinesh</h3>
      <input type='text' onChange={(e)=>{setsearch(e.target.value)}}/>
      <h1>Jobs available</h1>
      <ul>
        {searchresults.map((item,id)=>(
          <Link to={`/applyjob/${item.emp_id}`}>
          <li key={id}>
             
            <h5>{item.role}</h5>
            <p>{item.description}</p>
             
          </li>
          </Link>
        ))

        }
      </ul>
    </div>
  )
}

export default Userlogin