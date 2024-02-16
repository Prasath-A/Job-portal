import logo from './logo.svg';
import './App.css';
import Login from './Login';
import EmployeeLogin from './EmployeeLogin';
import Userlogin from './Userlogin';
import { Link,Outlet,Route,Routes, useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import ViewApplication from './ViewApplication';
import PostApplication from './PostApplication';
import Addpost from './Addpost';
import axios from 'axios';
import EmpRegister from './EmpRegister';
import Applyjob from './Applyjob';

function App() {
  const navigate = useNavigate();
  const [userdata,setuserdata]=useState([]);
  const [newusername,setnewusername]=useState('');
  const [newuserpass,setnewuserpass]=useState('');
  const [company,setcompany]=useState('');
  const [id,setid]=useState(0);
  const [data,setData]=useState([]);
  const [fetchEmpdata,setFetchEmpData]=useState([]);
  const [fetchUserdata,setFetchUserData]=useState([]);
  const [username,setUsername]=useState("");
  
    const [pass,setPass]=useState("");
    const [currentuser,setCurrentuser]=useState({});
    const [jobrole,setjobrole]=useState("");
    const [jobdes,setjobdes]=useState("");
    const [postedjob,setPostedjob]=useState([]);
  
   const EMP_API="http://192.168.68.30:4000/api";
   const USER_API="http://localhost:3001/user";

    const createEmpAccount=async(e)=>{
      e.preventDefault();
      let newid=0;
      if(data.length){
         newid=data.length+1;
      }
      else{
          newid=1;
      }
      const newitem={
          id:newid,
          name:newusername,
          password:newuserpass,
          company:company,
          application:[],
          posted:[]
      }
      try{
      const response=await axios.post(EMP_API,newitem);
      const datas=await axios.get(EMP_API);
      setData(datas.data);
      navigate('/');
      }catch{
        console.log("loading time error");
      }
      
    }
    
    const handleaddpost=async(e)=>{
      e.preventDefault();
      const postid=currentuser.posted.length?currentuser.posted.length+1:1;
      console.log(postid);
      const addpost={
            id:postid,
            role:jobrole,
            description:jobdes
          };
       setPostedjob(prev=>[...prev,addpost]);
       console.log(addpost);
       try{

       
       const response=await axios.patch(`${EMP_API}/${id}`,addpost);
      //  const response=await axios.patch("http://localhost:8081/employee", {
      //   employee: [
      //     {
      //       id:id,
      //       name:username,
      //       password:pass,
      //       company:fetchEmpdata[0].company,
      //       role:data[0].employee[0].role,
      //       posted: [
      //         ...data[0].employee[0].posted, // Add existing posted roles
      //         addpost, // Add the new posted role
      //       ],
      //     },
      //   ],
      // })
      //setCurrentuser(response);
      
     // setPostedjob(response.posted);
     console.log(response);
       }
       catch{
        console.log("patch error");
       }
       
       navigate('/post');
    }
    useEffect(()=>{
      const getdata=async()=>{
          try{
              const datas=await axios.get(EMP_API);
              const userdatas=await axios.get(USER_API);
              console.log(datas.data);
              console.log(userdatas.data);
              if(datas.data || userdatas.data){
              setData(datas.data);
               setuserdata(userdatas.data);
              // console.log(datas.data[0].employee);
              // console.log(datas.data[1].user);
              
              
              }
             // console.log(fetchdata);
          }
          catch{
              console.log("fetch error");
          }
      }
      getdata();
  },[])
 

  return (
    <div className="App">
      <div className='header'> 
        <h1>JOB PORTAL</h1>
      </div>
      <Routes>
        <Route path='/' element={<Login data={data} userdata={userdata} setPostedjob={setPostedjob} setid={setid} fetchEmpdata={fetchEmpdata} setFetchEmpData={setFetchEmpData} fetchUserdata={fetchUserdata} setFetchUserData={setFetchUserData} setUsername={setUsername} setPass={setPass} username={username} pass={pass} setCurrentuser={setCurrentuser}/>} />
        <Route path='/employeelogin' element={<EmployeeLogin  currentuser={currentuser}/>} />
        <Route path='/userlogin' element={<Userlogin data={data} userdata={userdata}/>} />
        <Route path='/applications' element={<ViewApplication fetchEmpdata={fetchEmpdata} setFetchEmpData={setFetchEmpData}/>}/>
        <Route path='/register' element={<EmpRegister createEmpAccount={createEmpAccount} setnewusername={setnewusername} setnewuserpass={setnewuserpass} setcompany={setcompany}/>} />
        <Route path='/applyjob/:id' element={<Applyjob EMP_API={EMP_API} data={data}/>}/>
        <Route path='post'>
          <Route index element={<PostApplication  postedjob={postedjob}/>}/>  
          <Route path='addpost' element={<Addpost setjobrole={setjobrole} setjobdes={setjobdes} handleaddpost={handleaddpost}/>} />
        </Route>
        </Routes>
    </div>
  );
}

export default App;
