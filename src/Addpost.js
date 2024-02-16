import React from 'react'
import { useRef } from 'react'
const Addpost = ({handleaddpost,setjobrole,setjobdes}) => {
    const Focus = useRef();
  return (
    <div>
    <form onSubmit={handleaddpost}>

   <label>Job Role </label>
   <input 
    type='text'
    ref={Focus}   // using of useRef .setting default focus
    required
    // value={postTitle}
    onChange={(e)=>{setjobrole(e.target.value)}}
   /><br/>
   <label>Description </label>
   <textarea
     required
    
     onChange={(e)=>{setjobdes(e.target.value)}}
    />
     
   <button type='submit'
    onClick={()=>Focus.current.focus()}   //setting only current focus for the button
    >submit</button>
   </form>
  
    </div>
  )
}

export default Addpost