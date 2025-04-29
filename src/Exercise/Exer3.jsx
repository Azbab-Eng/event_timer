import React, { useState } from 'react'

function Exer3() {
    // const [name,setName] = useState("")
    const [userList,setUserList] = useState([])
    const [userData,setUserData] = useState({
        name :"", 
        email : "", 
        password : ""
    })
    // const handleSubmit =()=>{
    //     console.log(name)
    //     alert(`Name : ${name}`)
    // }
    const handleChange = (e)=>{
        setUserData({ ...userData,[e.target.name] : e.target.value,})
    }
    const handleForm = (e)=>{
        e.preventDefault()
        console.log(userData)
        alert(`New User /n Name: ${userData.name} Email: ${userData.email} Password : ${userData.password}`)
        // alert(users)
        setUserList([...userList,userData])
        console.log(userList[-1])
    }
    // {let y = "baba"
    //     console.log(y[-1])
    // }
    // console.log(userList)
  return (
    <>
        <hr />
        <br />
        {/* <div>
            <form onSubmit={handleSubmit}>
                <label >Name  :</label>
                <input type="text" name='name' value={name}
                onChange={(e)=>setName(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div> */}
        {/* <h1>{name}</h1> */}

        <hr />
        <br />
        <div>
            <form onSubmit={handleForm}>
                <div>
                    Name : 
                    <input 
                    type="text" 
                    name='name'
                value={userData.name} 
                onChange={handleChange} 
                />
                </div>
                <div>
                    Email : 
                    <input type="email" name='email'
                value={userData.email} 
                onChange={handleChange} 
                />
                </div>
                <div>Age : <input type="password" name="password"
                value={userData.password} 
                onChange={handleChange} 
                />
                </div>
                <button type='submit'>Submit</button>
            </form>

            <br />
            <h1>{"Users"}</h1>
                {userList.map((user,index)=>(
                    
            <tr key={index}>
                    <td>User {index}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
              
            </tr>
                ))}
        </div>
    </>
  )
}

export default Exer3
