import { type } from "@testing-library/user-event/dist/type";
import {
  FETCH_SYNC,
  NO_SYNC,
  HIDE_ALERT,
  ASYNC_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  CENCORED,
  ASYNC_FETCH_POSTS,
  NO_SYNC_SAGA
} from "./actiontypes";

export const fetchSyncPosts = (obj) => {
  return {
    type: FETCH_SYNC,
    payload: obj,
  };
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};


export const noSyncSaga = (text) => {
//   return (dispatch) => {
//     dispatch({ type: NO_SYNC, post: text });
//     setTimeout(() => {
//       dispatch(hideAlert());
//     }, 3000);
//   };
return{
    type:NO_SYNC_SAGA,
    text:text
}
};


export const noSync =(text)=>{
    return{
        type:NO_SYNC,
        post:text
    }
}

export const asyncPosts = () => {
  // return async dispatch=>{
  //     dispatch(showLoader())
  //     try{
  //    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //    const data =await response.json()
  //     dispatch({type:ASYNC_POSTS,posts:data})
  //     setTimeout(()=>{
  //         dispatch(hideLoader())
  //     },2000)
  //     }catch(error){
  //      dispatch(hideAlert())
  //      dispatch(showError(error.message))
  //     }
  // }
  return {
    type: ASYNC_FETCH_POSTS
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const showError = (error) => {
  return {
    type: SHOW_ERROR,
    payload: error,
  };
};

export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
};

export const censored = (text) => {
  return {
    type: CENCORED,
    title: text,
  };
};
