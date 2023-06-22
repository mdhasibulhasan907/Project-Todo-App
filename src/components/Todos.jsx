// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Todo } from './Todo'

import style from './todos.module.css';


const Todos = (props) => {
    // eslint-disable-next-line no-undef
    // console.log(propos.todos);

//    todos->section 
// todo-> article
  return (
    <section className={style.todos}>
      {
        
         // eslint-disable-next-line react/prop-types
         props.todos.map((todo) => <Todo key={Todos.id} todo={todo}/>)
      }
    </section>
  )
}

export default Todos