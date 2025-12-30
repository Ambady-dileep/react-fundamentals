import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  function increaseCount(){
    setCount(prev=>prev+1)
    setMessage("")
  }

  function decreaseCount(){
    if (count===0){
      setMessage("Minimum reached")
    }else{
      setCount(prev=>prev-1)
      setMessage("")
    }
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      {message && <p>{message}</p>}
      <div className="button">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  )
}

export default App
