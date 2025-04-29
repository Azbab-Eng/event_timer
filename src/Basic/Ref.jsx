import React, { useState } from 'react'

function Ref({items}) {
const [selectIndex,setSelectIndex] = useState(-1)

  return (
    <>
    
      <h1>Items</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul>
        {items.map((item,index)=>(<li style={{margin:'5px',fontWeight:'bold',borderBottom:"2.5px solid black",
         backgroundColor:selectIndex === index ? "blue" : ''}} key={index} 
        onClick={()=>setSelectIndex(index)}
        >{item}<span style={{marginLeft:'5px'}}>{index}</span></li>))}
      </ul>
    </>  
  )
}

export default Ref
