import React,{useState,useEffect} from 'react'

export default function IntervalHook() {

    const[count,setCount] = useState(0)

    const tick = () => {
        setCount(prevState => prevState+1)
    }

    useEffect( () => {

        const Interval = setInterval(tick,2000)

        return() => {
            clearInterval(Interval)
        }
    },[])

    return (
        <div>
            {count}
        </div>
    )
}
