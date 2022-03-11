import React from 'react'
import classes from './AsyncItem.module.css'


export default function AsyncItem(props) {
  return (
    <div className={classes.asyncItem}>
      {props.title}
    </div>
  )
}
