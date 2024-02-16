
import './employeelogin.css' 

import './PostApplication'
import { Link, Route, Routes } from 'react-router-dom'
const EmployeeLogin = ({currentuser}) => {
    
    
  return (
    <div>
        
        <h1>Welcome,{currentuser.name}</h1>
        <div className='heading'>
        <Link to="/employeelogin">
            Home
        </Link>
        <Link to="/applications">
            View applications
        </Link>
        <Link to="/post">
            Post applications
          </Link>
        </div>
        <h1>{currentuser.name}</h1>
         <h2>{currentuser.company}</h2>
         
        <p>A JavaScript Developer at Zoho plays a pivotal role in crafting dynamic and responsive web applications, contributing to the innovation and efficiency of Zoho's suite of products. Tasked with leveraging their expertise in JavaScript, HTML, and CSS, they collaborate with cross-functional teams to design and implement user-friendly interfaces and enhance the overall user experience. Zoho's JavaScript Developers are adept at translating business requirements into functional code, ensuring seamless integration of features and functionalities. They actively participate in the entire software development lifecycle, from conceptualization to deployment, and contribute to the continuous improvement of Zoho's applications by staying abreast of industry trends and emerging technologies. In this dynamic environment, Zoho's JavaScript Developers thrive on problem-solving, creativity, and a commitment to delivering high-quality software solutions that align with Zoho's dedication to empowering businesses through innovative technology.</p>
        
    
    </div>
  )
}

export default EmployeeLogin