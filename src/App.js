import React
// , { useReducer, createContext } 
from 'react';
import './App.css';

import InputForm from './Components/UseInputCustomHooks/InputForm';
// export const CountContext = createContext()

// const initialState = 0


// const reducer = (prevState,action) => {
//      switch(action) {
//        case  'Increment' :
//          return prevState + 1 
//          case 'Decrement' :
//            return prevState - 1
//            case 'reset' :
//              return initialState
//               default:
//                return prevState
//      }
// }


function App() {

//  const [count,dispatcher] =  useReducer(reducer,initialState)

  return (

    <div className="App">
      <InputForm />
      </div>
  )
}

export default App;
