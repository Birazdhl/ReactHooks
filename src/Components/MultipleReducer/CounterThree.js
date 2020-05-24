import React,{useReducer} from 'react'

const initialState = 0;


const reducer = (prevState, action) => {
    switch(action){
        case 'Increment' :
            return prevState+1
            case 'Decrement' :
                return prevState-1
                case 'reset' :
                    return initialState
    }
}

export default function CounterThree() {

    const[count,dispather]  = useReducer(reducer, initialState)
    const[countTwo,dispatherTwo]  = useReducer(reducer, initialState)


    return (
        <div>
            <p>Count - {count}</p>
              <button onClick={() => dispather('Increment')}>Increment</button> 
              <button onClick={() => dispather('Decrement')}>Decrement</button>
              <button onClick={() => dispather('reset')}>Reset</button> 
              <div>

              <p>Count - {countTwo}</p>
              <button onClick={() => dispatherTwo('Increment')}>Increment</button> 
              <button onClick={() => dispatherTwo('Decrement')}>Decrement</button>
              <button onClick={() => dispatherTwo('reset')}>Reset</button> 

              </div>
                           
        </div>
    )
}
