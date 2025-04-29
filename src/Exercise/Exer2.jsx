import React, { useRef, useState } from 'react'

function Exer2() {
    const [names ,setNames] = useState([])
    const [editIndex,setEditIndex] = useState([])
    const [inputName ,setInputName] = useState("")
    const ref = useRef("")
    // const myRef = ()=>{
        //     let edit = ref.current
        //     console.log(edit)
        // }
    const addName= ()=>{
        if (inputName.trim() !== "") {setNames([...names,inputName]) 
            setInputName("")
    }}
    const handleDelete = (index)=>{
        const newName = names.filter((_,i)=> i !== index)
        setNames([...newName])
    }
    const handleEdit = (index)=>{
        setEditIndex(index)
        setInputName(names[editIndex])
    }
    const handleSave = ()=>{
        const updatedName = [...names]
        updatedName[editIndex] = inputName
        setNames(updatedName)
        setEditIndex(null)
        setInputName("")
    }
    const savEdit = (e,index)=>{
        if(e.target.textContent.toLocaleLowerCase() === "edit"){
            e.target.textContent = "Save"
            handleEdit(index)        
        }else{
            e.target.textContent = "Edit" 
            handleSave()
        }

        
        
    }
  return (
    <>
    <hr />
    <br /><br />
      
    <div>
        <p>
            <input type="text" 
            value={inputName} 
            placeholder='Enter Your Name'
            onChange={(e)=>
            setInputName(e.target.value) }/>
            <button onClick={addName}>Add Name</button>
        </p>
    </div>
      
      <div>
        <ul>
       {names.length === 0 ? <p>Names not found</p> :names.map((name,index)=>(
              <li key={index}>
                <input  value={name} type="text" readOnly /> 
              <button onClick={(e)=>savEdit(e,index)} >Edit</button>
              <button onClick={()=>handleDelete(index)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Exer2
