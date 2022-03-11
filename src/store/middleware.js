import { noSync } from "./actions"
import { CENCORED } from "./actiontypes"




const forbidden = ['fuck','spam','php']

export function forbiddenMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type ===CENCORED ){
                const found = forbidden.filter(w=>action.title.includes(w))
                if(found.length){
                 dispatch(noSync('Вы спамер'))
                }
            }
          return next(action)
        }
    }
}