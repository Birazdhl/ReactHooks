 import React,{useState} from 'react'
 
 function HookCounterThree() {

    const[name, setName] = useState({firstName: '', lastName:''})

     return (
         <div>
             <input type="text" value={name.firstName}
             onChange={e => setName({...name, firstName: e.target.value})}></input>

            <input type="text" value={name.lastName}
             onChange={e => setName({...name,lastName: e.target.value})}></input>

            <p>Your FirstName is {name.firstName}</p>
            <p>Your LastName is {name.lastName}</p>

         </div>
     )
 }
 
 export default HookCounterThree
 