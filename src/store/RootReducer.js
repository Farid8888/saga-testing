import {combineReducers} from 'redux'
import Reducer from './reducer'
import AsynReducer from './asyncReducer'
import AppReducer from './appReducer'


export const RootReducer=combineReducers({
    syncPosts:Reducer,
    asyncPosts:AsynReducer,
    appItems:AppReducer
})