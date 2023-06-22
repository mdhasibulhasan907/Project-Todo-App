// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Todo } from './Todo'


const Todos = (props) => {
    // eslint-disable-next-line no-undef
    // console.log(propos.todos);

//    todos->section 
// todo-> article
  return (
    <section>
      {
        
         props.todos.map((todo) => <Todo key={Todos.id} todo={todo}/>)
      }
    </section>
  )
}

export default Todos