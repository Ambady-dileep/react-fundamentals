import {useState} from 'react'

function App(){
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([])
  function addTodos(){
    setTodos(prev=>[...prev,input])
    setInput("")
  }
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value = {input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App