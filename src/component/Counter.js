import React, {useState} from 'react'

function Counter() {
    const initialCount = 0
    const[count, setCount] = useState(initialCount)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount (previousCount => previousCount + 1)}>Increment</button>
            <button onClick = {() => setCount (previousCount => previousCount - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
