
// eslint-disable-next-line no-unused-vars
import React from 'react'

import style from './todo.module.css'

export const Todo = (props) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {id,title,desc}=props.todo;
  return (
    <article className={style.todo}>
       <div>
       <h3>{title}</h3>
        <p>{desc}</p>
       </div>

       <div>
        <button className={style.btn}>
        <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
        </button>
       </div>
    </article>
  )
}
