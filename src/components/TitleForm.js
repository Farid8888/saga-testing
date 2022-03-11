import React,{useRef} from 'react'
import classes from './TitleForm.module.css'
import {useDispatch} from 'react-redux'
import { censored, fetchSyncPosts,noSync, noSyncFetch } from '../store/actions'
import { noSyncSaga } from '../store/actions'


export default function TitleForm() {
const inputRef = useRef()
const dispatch = useDispatch()
const forbidden = ['fuck','spam','php']

const submitHandler=(e)=>{
    e.preventDefault()
    const enteredValue = inputRef.current.value
    const found = forbidden.filter(w=>enteredValue.includes(w))
    console.log(enteredValue)
    if(enteredValue.trim() === ''){
     dispatch(noSyncSaga('Название поста не может быть пустым'))
     return
    }
    const obj={
        text:enteredValue,
        id:Math.random()
    }
    if(!found.length){
        dispatch(fetchSyncPosts(obj))
    }
    
    dispatch(censored(enteredValue))
}

  return (
    <form className={classes.titleForm} onSubmit={submitHandler}>
        <div className={classes.titleFlex}>
            <label htmlFor='title'>Заголовок Поста</label>
            <input className="form-control" id='title' placeholder='enter title' type='text' ref={inputRef}/>
        </div>
        <div className={classes.btn}>
            <button className="btn btn-success" type='submit'>Создать</button>
        </div>
    </form>
  )
}
