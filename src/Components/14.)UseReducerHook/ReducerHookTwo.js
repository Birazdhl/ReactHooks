import React,{useReducer} from 'react'

  const initialState =  {
    firstCounter : 0,
    secondCounter: 10
  }
    const reducer = (currValue,action) => {
      switch(action.type){
          case  'Increment' :
           return { ...currValue, firstCounter: currValue.firstCounter + action.value }
        
            case  'Decrement' :
            return {...currValue, firstCounter: currValue.firstCounter + action.value }

            case  'Increment2' :
                return {...currValue, secondCounter: currValue.secondCounter + action.value }
             
                 case  'Decrement2' :
                 return {...currValue, secondCounter: currValue.secondCounter + action.value }
        
            case  'reset' :
            return initialState

            default:
               return currValue
      }
  }


export default function ReducerHookTwo() {

    const[count,dispathcer] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count - {count.firstCounter}</p>
            <p>Count - {count.secondCounter}</p>

              <button onClick={() => dispathcer({type:'Increment', value:1})}>Increment</button>
              <button onClick={() => dispathcer({type:'Decrement', value:1})}>Decrement</button>
              <button onClick={() => dispathcer({type:'Increment', value:5})}>Increment By 5</button>
              <button onClick={() => dispathcer({type:'Decrement', value:5})}>Decrement By 5</button>
              <button onClick={() => dispathcer({type:'Increment2', value:5})}>Increment Two By 5</button>
              <button onClick={() => dispathcer({type:'Decrement2', value:5})}>Decrement Two By 5</button>
              <button onClick={() => dispathcer({type:'reset'})}>Reset</button>
        </div>
    )
}
