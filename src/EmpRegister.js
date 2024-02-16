import React, { useState } from 'react'

const EmpRegister = ({createEmpAccount,setnewusername,setnewuserpass,setcompany}) => {
  
  return (
    <div>
        <form onSubmit={createEmpAccount}>
        <label>username</label>
        <input type='text' onChange={(e)=>{setnewusername(e.target.value)}}/>
        <label>password</label>
        <input type='password'  onChange={(e)=>{setnewuserpass(e.target.value)}}/>
        <label>Company</label>
        <input type='password'  onChange={(e)=>{setcompany(e.target.value)}}/>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default EmpRegister