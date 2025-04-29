import React from 'react'

function Exer1({users}) {
  return (
    <>
    <div>
        <table>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gmail</td>
                </tr>
            </thead>
            <tbody>
                { users.map((user,index)=>(
                    
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.mail}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    {/* <div>
        <span>{props.name}</span>
        <span>{props.age}</span>
        <span>{props.mail}</span>
    </div> */}
    </>
  )
}

export default Exer1
