import React,{useEffect,useReducer} from 'react'
import axion from 'axios'

const initialState = {
   loading: true,
   post: {},
   error : ''
}

const reducer = (state,action) => {
    switch(action.type){
        case 'Fetch_Data':
            return{post : action.result, loading:false}
            case 'NoFetch_Data' :
             return {post:null,loading:false,error:'Something Went Wrong'}
}
}

export default function FetchDataTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        
        axion.get('https://jsonplaceholder.typicode.com/posts/1')

        .then(response => {
            dispatch({type: 'Fetch_Data', result:response.data })
        })

        .catch(error => {
            dispatch({type: 'NoFetch_Data', error:'Something Went Wrong'})
        })
        
    }, [])

    return (
        <div>
            {state.loading? 'Loading' : state.post.title}
            {state.error? state.error :null}
        </div>
    )
  }


