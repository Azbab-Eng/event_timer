import { useRef, useState} from 'react'
// https://reactjs.org/link/react-devtools
import Todo from './Todo'
import Ref from './Ref'

function App() { 
  const [items,setItems] = useState(["Mango","Banana","Apple"])
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Azbab")
  const [name, setName] = useState([])
  const [count2, setCount2] = useState(0)
  const [text2, setText2] = useState(true)
  const inputRef = useRef("")
  const refUse = ()=>{
    inputRef.current.focus()
    let name = inputRef.current.value
    setName(name)
    console.log(name)
  }
  const onClick = ()=>{
    let clicked = count +1 
    setCount(clicked)
  }
  const onClick2 = ()=>{
    let clicked2 = count2 +1 
    setText2(!text2)
    setCount2(clicked2)


  }
  let onChange=(e)=>{
    let show = e.target.value
    setText(show)
  }
  let btnColor = {color:"red",fontSize:"20px",fontWeight:"700"}
  return (
    <>
      <Ref items={items} />
      <div style={{backgroundColor:'blue',color:'white',width:'400px'}}
      className='text-center' >
        <div style={{background:'gray',padding:'5px',display:'inline-block',margin:'5px',
          borderRadius:'5px'
        }}
        className=" font-bold text-red-500 text-center">{count}</div>
       {true && <button  style={btnColor}
       onClick={onClick} className='text-center font-bold'>Increase</button>}
      </div>
      <div className='text-center flex p-5 text-blue text-3x1 underline font-bold'>
        <input type="text" 
        placeholder='You can write your text here'
        onChange={onChange}
        />
        <p>{text}</p>
      </div>
      <div className="text-center flex flex-col font-bold text-blue-900 justify-between">
        <h2>{count2}</h2>
        <button onClick={onClick2} >Click me</button>
        {/* <p>{text2 && "This is a Old Numbber"}</p> */}
        <p>{text2%2 === 1 ? "This is a Even Number" : "This is a Old number"}</p>
      </div>
      <div className="text-center flex flex-col">
        <h2 className='text-3xl text-red-500'>{name}</h2>
        <input  className='p-3 text-3xl font-bold text-red-700 border-2' type="text" placeholder='Exp...' ref={inputRef}  />
        <button onClick={refUse}>Click Ref</button>
      </div>
      <Todo></Todo>
    </>
  )
}

export default App
