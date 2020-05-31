import React
, { useReducer, createContext } 
from 'react';
import './App.css';

import FetchDataRed from './Components/17.)FetchingDataWithReducer/FetchDataRed';
import HookTimer from './Components/21.)UseRefReactHookTwo/HookTimer';
import Counter from './Components/19.)UseMemoHook/Counter';

//useContext

// export const UserContext = React.createContext()
// export const SurnameContext = React.createContext()
//<div className="App">
{/* <UserContext.Provider value={"Biraz"}>
   <SurnameContext.Provider value={"Dahal"}>
     <ComponentC />
   </SurnameContext.Provider>
</UserContext.Provider> */}
//</div>



// useReducer with useContext

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

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider value={{countValue: count, functionValue : dispatch}}>
//       <div className="App">
//        Count - {count}
//        <ComponentA />
//        <ComponentB />
//        <ComponentC />
//       </div>
//     </CountContext.Provider>
//   )
// }
export const CountContext = createContext()

//  const [count,dispatcher] =  useReducer(reducer,initialState)


function App() {

  return (
      <div className="App">
          <Counter />
      </div>
  )
}

export default App;
