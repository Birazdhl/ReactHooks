import React,{useState,useEffect} from 'react'
import axiox from 'axios'


export default function FetchDataRed() {

    const[post,setPost] =  useState({})
    const[loading, setLoading] =  useState(true)
    const[error, setError] = useState('')

    useEffect(() => {
        axiox.get('https://jsonplaceholder.typicode.com/posts/1')

        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })

        .catch(response => {
            setLoading(false)
            setPost({})
            setError("Something went wrong")
        })
        
    },[])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}
