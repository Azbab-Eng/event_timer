import { list } from 'postcss'
import React, { useRef, useState } from 'react'

function Todo() {
    const [names,setNames] = useState(["Babalola","Abdulazeez"])
    const setRef = useRef('')
    const refUse2 = ()=>{
        const name =setRef.current.value 
        // setNames(...names,name) 
}
  return (
    <div>
        <ul>
      {names.map((name,index)=><li key={index}>{name}</li>)}
        </ul>
        <input  className='p-1 text-1xl font-500' type="text" placeholder='Type Names...' ref={setRef}  />
        <button onClick={()=>refUse2("New Item")}>Add Name</button>
    </div>
  )
}

export default Todo
