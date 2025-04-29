import React from 'react'
import Exer1 from './Exer1'
import Exer2 from './Exer2'
import Exer3 from './Exer3'

function Exercise() {
  const users = [
    {name:"Aazeez",age:24,mail:"az@gmail.com"},
    {name:"Aafeedh",age:27,mail:"af@gmail.com"},
    {name:"Usman",age:30,mail:"us@gmail.com"},
  ]
  
  return (
    <>
        <br />
        <div><strong> Let perform Exercises Here </strong></div>
        <Exer1 users={users} />
        <Exer2  />
        <Exer3/>
    </>
  )
}

export default Exercise
