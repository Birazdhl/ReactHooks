import React from 'react'
import useCounter from '../../Hooks/UseCounter'

function CounterTwo() {

    const [count,Increment,Decrement,Reset] = useCounter(5,5)

    return (
        <div>
            <p><h2>Count - {count}</h2></p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
            
        </div>
    )
}

export default CounterTwo
