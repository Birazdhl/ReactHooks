import React,{useContext} from 'react'
import { CountContext } from '../../App'

export default function ComponentF() {

    const contextValue = useContext(CountContext) 

    return (
        <div>
          <b>Component F - {contextValue.countValue}</b>
          <button onClick={() => contextValue.functionValue('Increment')}>Increment</button>            
          <button onClick={() => contextValue.functionValue('Decrement')}>Decrement</button>
          <button onClick={() => contextValue.functionValue('Reset')}>Reset</button>            
        </div>
    )
}
