import classes from './AsyncPosts.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { asyncPosts } from '../store/actions'
import AsyncItem from './AsyncItem'
import { Loader } from './Loader'
import Error from './Error'

const AsyncPosts =()=>{
    const dispatch =useDispatch()
    const fetchedPosts = useSelector(state=>state.asyncPosts.fetchedPosts)
    const loading = useSelector(state=>state.appItems.loading)
    const error = useSelector(state=>state.appItems.alert)
const fetchPosts =()=>{
dispatch(asyncPosts())
}

    return(
        <div className={classes.asyncPosts}>
           <h2>Асинхронные посты</h2>
           {loading && <Loader/>}
           {fetchedPosts.length === 0  && !loading && !error &&  <div className={classes.btn}>
               <button className="btn btn-primary" type='button' onClick={fetchPosts}>Загрузить</button>
           </div>}
           {!loading && fetchedPosts.map(post=>{
               return <AsyncItem key={post.id} title={post.title}/>
           })}
           {!loading && error && <Error error={error}/>}
        </div>
    )
}

export default AsyncPosts