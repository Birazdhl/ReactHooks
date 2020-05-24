import React,{useState,useEffect} from 'react'
import UseDocumentTitle from '../../Hooks/UseDocumentTitle'

function DocTitleCountTwo() {

    const [count, setCount] = useState(0)

    UseDocumentTitle(count)

    return (
        <div>
            Count - {count}
            <button onClick={() => setCount(count+1)}>Change Count</button>
        </div>
    )
}

export default DocTitleCountTwo
