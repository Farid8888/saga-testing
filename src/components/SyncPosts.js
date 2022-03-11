import React from 'react'
import SyncItem from './SyncItem'


export default function SyncPosts(props) {

    
  return (
    <div>
      <h2>Синхронные Посты</h2>
      {props.items.length === 0 ? <div style={{textAlign:'center'}}>Постов пока нет</div> : props.items.map(item=>{
          return <SyncItem key={item.id} text={item.text}/>
      })}
    </div>
  )
}
