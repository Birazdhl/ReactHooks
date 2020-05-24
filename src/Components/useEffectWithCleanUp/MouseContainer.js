 import React,{useState,useEffect} from 'react'
import HookMouse from '../runEffectOnlyOnce/HookMouse'


  export default function MouseContainer() {
 
    const[display,setDisplay] = useState(true)

     return (
         <div>
             <button onClick={() => setDisplay(!display)}>Toogle</button>
             {display && <HookMouse/>}
         </div>
     )
 }
 