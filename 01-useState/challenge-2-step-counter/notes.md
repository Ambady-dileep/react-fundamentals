## useState – Challenge 2: Step Counter

### Goal
Build a counter that increases/decreases by a custom step value controlled by user input.

### Concepts Learned
- Managing multiple pieces of state in one component
- Handling controlled input elements with `useState`
- Type conversion with `Number()` for input values
- Conditional logic inside state updater functions
- Preventing negative counter values
- Handling edge cases (step = 0, empty input)

### Key Code Patterns

#### Multiple State Variables
```js
const [count, setCount] = useState(0)
const [step, setStep] = useState(1)
```

#### State Update with Complex Logic
```js
function decreaseCounter() {
  setCount(prev => {
    if (prev - step < 0) {
      return 0  // Prevent negative values
    }
    return prev - step
  })
}
```

#### Controlled Input with Type Conversion
```js
<input 
  type="number" 
  value={step === 0 ? "" : step}  // Show empty string when step is 0
  onChange={(e) => setStep(Number(e.target.value))}  // Convert string to number
/>
```

#### Simple State Update
```js
function increaseCounter() {
  setCount(prev => prev + step)
}
```

### Mistakes I Made
- Initially forgot to convert `e.target.value` to a number (it's always a string!)
- Didn't handle the case where counter could go negative
- Struggled with displaying empty input when step is 0
- Realized I need to think about edge cases more carefully

### Key Takeaway
**Multiple state variables work independently.**

Each state variable has its own setter and can be updated without affecting others. Always consider edge cases like:
- Zero values
- Negative results
- Type conversions from inputs