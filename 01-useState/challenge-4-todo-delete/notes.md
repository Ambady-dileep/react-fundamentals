## Challenge 4 – Todo Delete

### Concepts Learned
- Removing items immutably
- Using filter()
- Passing index to handler
- Rendering dynamic buttons

### Mistakes I Made
- Tried nested filter
- Misused map in JSX
- Tried updating state while rendering

### Takeaway
State updates must be immutable.
Render logic and update logic are separate.


Todo Delete Logic (Plain English)

1️⃣ Render todos using .map()
2️⃣ For each todo:
    Show text
    Show delete button
    3️⃣ When delete clicked:
    Remove that index from array
    Create new array using .filter()