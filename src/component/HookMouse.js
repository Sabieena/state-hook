import React, {useState, setState, useEffect} from 'react'

function HookMouse() {
    const[X, setX] = useState(0)
    const[Y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, []) // we can mimic componentDidMount with useEffect by passing empty array as second parameter in useEffect 
    return (
        <div>
            <h1>Hook X - {X}</h1>
            <h1>Hook Y - {Y}</h1>
        </div>
    )
}

export default HookMouse
