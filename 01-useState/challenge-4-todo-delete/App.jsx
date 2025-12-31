import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodos(){
    if(input==="") return 
    setTodos(prev=>[...prev,input])
    setInput("")
  }

  function deleteTodos(indexToDelete){
    setTodos(prev=>prev.filter((_,index)=>index!= indexToDelete))
  }
  return (
    <div>
      <h1>Todo Delete</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((todo,index)=>(
            <li key ={index}>{todo}
            <button onClick={()=>deleteTodos(index)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default App
