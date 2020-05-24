import React,{useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0;

    const[count, setState] = useState(initialCount)


    const increamentFiveCount = () => {
        for(let i = 0; i<5; i++)
        {
            setState(prevCount => prevCount+1)
        }
    }

    return (
        <div>
           <p> Count : {count} </p>
           <button onClick={() => setState(initialCount)}>Reset</button>
           <button onClick={() => setState(count => count + 1)}>Increment</button>
           <button onClick={() => setState(count => count - 1)}>Decrement</button>
           <button onClick={increamentFiveCount}>Increaent Five</button>

        </div>
    )
}

export default HookCounterTwo
