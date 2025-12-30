
# React Learning Notes

## useState – Challenge 1: Counter

### Goal
Build a counter with increase and decrease buttons.

### Concepts Learned
- `useState` basics - declaring and using state in functional components
- Updating state using previous value with callback function
- Disabling buttons conditionally based on state
- Conditional rendering using the `&&` operator

### Key Code Patterns

#### Declaring State
```js
const [count, setCount] = useState(0)
```

#### Safe State Update (Using Previous Value)
```js
// ✅ Correct - uses previous state value
setCount(prev => prev + 1)

// ❌ Avoid - can lead to stale state issues
setCount(count + 1)
```

#### Conditional Rendering
```js
// Only renders  when message is truthy
{message && {message}}
```

#### Button Disable Logic
```js
<button disabled={count === 0} onClick={() => setCount(prev => prev - 1)}>
  Decrease

```

### Mistakes I Made
- Tried to update state without checking conditions first
- Forgot that empty string (`""`) is falsy in JavaScript
- Didn't understand how the `&&` operator works for conditional rendering initially

### Key Takeaway
**React UI is a function of state.**

> No state change → No UI change.

When state updates, React re-renders the component to reflect the new state in the UI.
