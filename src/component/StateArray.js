import React, {useState} from 'react'

function StateArray() {
    const[items, setItems] = useState([])
// while dealing with objects and arrays, always make sure to spread your state variable and then call setter function
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)   + 1 
        }])

    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => (
                        <li key = {item.id}>{ item.value }</li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default StateArray
