import React from 'react'
import SyncPosts from './SyncPosts'
import AsyncPosts from './AsyncPosts'
import classes from './Posts.module.css'
import {useSelector} from 'react-redux'


export default function Posts() {
    const fetchedSyncPosts = useSelector(state=>state.syncPosts.syncPosts)

  return (
    <div>
      <div className={classes.posts}>
          <SyncPosts items={fetchedSyncPosts}/>
          <AsyncPosts/>
      </div>
    </div>
  )
}
