import React, {useState} from 'react'

function HookCounter() {
    // first variable is the actal state and second variable is  a function i.e update the state by providing a new state
    const[count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1 ) }>click {count}</button>
            
        </div>
    )
}

export default HookCounter
