import React, {useState} from 'react'

function HookCounterFour() {

    const[items,setArray] = useState([])

    const arrayIncrement = () => {
        setArray([...items,{
            id: items.length,
            value: Math.random() * 10 + 1
        }])
    }

    return (
        <div>
            <button onClick={() => arrayIncrement()}>Click</button>
            {items.map(item => 
            <li key={item.id}>{item.value}</li>)}
        </div>
    )
}

export default HookCounterFour
