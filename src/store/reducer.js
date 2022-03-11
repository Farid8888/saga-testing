import {CENCORED, FETCH_SYNC,HIDE_ALERT,NO_SYNC} from './actiontypes'


const initialState={
    syncPosts:[],
    posts:'',
    title:''
}

const Reducer =(state=initialState,action)=>{
    switch(action.type){
      case FETCH_SYNC: return {...state,syncPosts:state.syncPosts.concat(action.payload)}
      case NO_SYNC: return {...state,posts:action.post}
      case HIDE_ALERT:return {...state,posts:''}
      case CENCORED:return {...state,title:action.title}
        default:return state
    }
}

export default Reducer