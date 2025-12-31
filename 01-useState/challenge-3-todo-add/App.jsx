import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    function handleAdd(){
      if (input === "") return 
      setTodos(prev=>[...prev,input])
      setInput("")
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            <button onClick={handleAdd}>Add</button>

            <ul>
              {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
              ))}
            </ul>
        </div>
    )
}

export default App