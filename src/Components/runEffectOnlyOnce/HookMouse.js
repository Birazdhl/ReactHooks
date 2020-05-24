import React,{useState,useEffect} from 'react'

export default function HookMouse() {

    const[xvalue, setX] = useState(0)
    const[yvalue, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
          setX(e.clientX)
          setY(e.clientY)
    }

    useEffect(() => {
        console.log('Render Method Called')
        window.addEventListener('mousemove',logMousePosition)


       return () => {
           console.log('Component unmounting Code')
           window.removeEventListener('mousemove',logMousePosition)
       }

    },[])

    return (

      

        <div>
            Hook X - {xvalue} Y - {yvalue}
        </div>
    )
}
