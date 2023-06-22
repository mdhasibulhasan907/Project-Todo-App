// eslint-disable-next-line no-unused-vars
import React from 'react';
import Todos from './Todos';

import style from './home.module.css'

// eslint-disable-next-line no-unused-vars
const dummyTodos=[
    {
     id:1,
     title:'todo title 1',
     desc:'todo1 description  is here'
    },
    {
     id:2,
     title:'todo title 2',
     desc:'todo2 description  is here'
    }
]

const Home = () => {
    return (
         <div className={style.container}> 
            <Todos  todos={dummyTodos}/>
            
        </div>
    )
} 

export default Home;