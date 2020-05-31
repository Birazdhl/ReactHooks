import React,{useState,useEffect} from 'react'

function HooksCounterOne() {

    const[count,setCount] = useState(0)

    const[name, setName] = useState('')

    useEffect(() => {
        console.log('Updating document title')
        document.title =  `Clicked ${count} times`     
    }, [count])  //second parameter determine only the value to be re-render

    return (
        <div>
            <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}></input>

            <button onClick={() => setCount(count +  1)}>Click {count} times</button>
        </div>
    )
}

export default HooksCounterOne
