import {SHOW_LOADER,HIDE_LOADER,SHOW_ERROR,HIDE_ERROR} from "./actiontypes"



const initialState ={
   alert:'',
   loading:false
}


const AppReducer =(state=initialState,action)=>{
switch(action.type){
    case HIDE_LOADER:return {...state,loading:false}
    case SHOW_LOADER:return {...state,loading:true}
    case SHOW_ERROR:return {alert:action.payload,loading:false}
    case HIDE_ERROR:return {...state,alert:''}
    default: return state
}
}

export default AppReducer