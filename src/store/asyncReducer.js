import { ASYNC_POSTS } from "./actiontypes"



const initialState ={
    fetchedPosts:[]
}


const AsynReducer =(state=initialState,action)=>{
switch(action.type){
    case ASYNC_POSTS:return {...state,fetchedPosts:action.posts}
    default: return state
}
}

export default AsynReducer