## useState – Challenge 3: Todo App

### Goal
Build a simple todo list where users can add items.

### Concepts Learned
- Working with arrays in state
- Using the spread operator (`...`) to add items to arrays
- Mapping over arrays to render lists
- The importance of `key` prop in lists
- Input validation before adding items
- Clearing input after submission
- Difference between `()` and `{}` in arrow functions

### Key Code Patterns

#### Array State Management
```js
const [todos, setTodos] = useState([])
const [input, setInput] = useState("")
```

#### Adding Items to Array (Immutably)
```js
function handleAdd() {
  if (input === "") return  // Guard clause - prevent empty todos
  
  setTodos(prev => [...prev, input])  // Spread previous array, add new item
  setInput("")  // Clear input after adding
}
```

#### Rendering Lists with map()
```js
// ✅ Correct - parentheses for implicit return
{todos.map((todo, index) => (
  {todo}
))}

// ❌ Wrong - curly braces require explicit return
{todos.map((todo, index) => {
  {todo}
})}
```

#### Controlled Input
```js
<input 
  type="text" 
  value={input} 
  onChange={(e) => setInput(e.target.value)} 
/>
```

### Mistakes I Made
- Forgot to add `key` prop to list items (React needs this for efficient re-rendering)
- Forgot to use `<ul>` and `<li>` tags for proper list structure
- Didn't add input validation (`if (input === "") return`)
- Forgot to clear input after adding todo (`setInput("")`)
- Used curly braces `{}` instead of parentheses `()` in the map function, which prevented implicit return

### Key Takeaway
**Arrays in state must be updated immutably.**

Never use `push()`, `pop()`, or other mutating methods. Instead:
- Add items: `[...prev, newItem]`
- Always provide `key` prop when rendering lists
- `() =>` (parentheses) for implicit return vs `{} =>` (braces) needs explicit `return`
