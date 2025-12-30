import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function increaseCounter() {
    setCount(prev => prev + step)
  }

  function decreaseCounter(){
    setCount(prev=>{
        if (prev - step < 0) {
            return 0
        }
        return prev - step
    })
  }

  return (
    <div>
      <h1>Step Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <input type="number" value={step===0?"":step} onChange={(e)=> setStep(Number(e.target.value))}/>
    </div>
  )
}

export default App
