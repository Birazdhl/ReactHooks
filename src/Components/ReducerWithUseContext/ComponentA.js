import React,{useContext} from 'react'
import {CountContext} from '../../App'

export default function ComponentA() {

    const newValue = useContext(CountContext)

    return (
        <div>
                <b>Component A - {newValue.countValue} </b>
               <button onClick={() => newValue.functionValue('Increment')}>Increment</button>
               <button onClick={() => newValue.functionValue('Decrement')}>Decrement</button>
               <button onClick={() => newValue.functionValue('reset')}>Reset</button>            

        </div>
    )
}
