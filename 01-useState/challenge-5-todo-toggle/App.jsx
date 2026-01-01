import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo() {
    if (input === "") return

    setTodos(prev => [
      ...prev,
      { text: input, completed: false }
    ])

    setInput("")
  }

  function toggleTodo(index) {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  return (
    <div>
      <h1>Todo Toggle</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
