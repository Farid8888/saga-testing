import {put,call,takeEvery, delay} from 'redux-saga/effects'
import { showLoader,hideLoader,hideAlert,showError, noSync } from './actions'
import { ASYNC_POSTS,ASYNC_FETCH_POSTS, NO_SYNC_SAGA,NO_SYNC } from './actiontypes'


export function* sagaMain(){
    yield takeEvery(ASYNC_FETCH_POSTS,sagaWorker)
    yield takeEvery(NO_SYNC_SAGA,noSyncSagaWorker)
}

export function* noSyncSagaWorker(action){
        yield put(noSync(action.text));
        yield delay(3000)
        yield put(hideAlert())
    }


export function* sagaWorker(){
            yield put(showLoader())
            try{
             const payload = yield call(fetchPosts)
            yield put({type:ASYNC_POSTS,posts:payload})
            yield put(hideLoader())
            }catch(error){
             yield put(hideAlert())
             yield put(showError(error.message))
            }
        
}

const fetchPosts = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const data =await response.json()
    return data
}