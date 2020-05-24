import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function FetchingDataTwo() {

    const[id,setID] = useState(1);
    const[post,setPost] = useState({});
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        console.log('Lionel')
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
         .then(res  => {
            setPost(res.data)
         })
  
         .catch(err => {
           console.log(err)
         })
    },[idFromButtonClick])
  

    return (
        <div>
            <p><input type="text" value={id} onChange={(e) => setID(e.target.value)}></input></p>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>
                {post.title}
            </div>
        </div>
    )
}
