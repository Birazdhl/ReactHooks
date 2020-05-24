import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state,action) => {
    switch(action) {
       case  'Increment' :
        return state+1
       case 'decrement' :
        return state-1
       case 'reset':
        return initialState
}
}

export default function ReducerCounter() {

    const[count,dispatcher] = useReducer(reducer,initialState)

    return (
        <div>
            <p>Count - {count}</p>
          <button onClick={() => dispatcher('Increment')}>Increment</button>   
          <button onClick={() => dispatcher('decrement')}>Decrement</button> 
          <button onClick={() => dispatcher('reset')}>Reset</button>
        </div>
    )
}
