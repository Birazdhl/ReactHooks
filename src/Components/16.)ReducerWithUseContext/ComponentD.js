import React,{useContext} from 'react'
import {CountContext} from '../../App'


export default function ComponentD() {

    //  const newValue = useContext(CountContext) -- this must be uncomment when in use

    return (
        <div>
           <b>ComponentD- {newValue.countValue}</b>
          <button onClick={() => newValue.functionValue('Increment')}>Increment </button>           
          <button onClick={() => newValue.functionValue('Decrement')}>Decrement </button>
          <button onClick={() => newValue.functionValue('reset')}>Reset </button>
        </div>
    )
}
