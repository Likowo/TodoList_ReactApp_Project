//The rule of Components are for reusability of data. Similar to containerization in html wireframing that helps you easily rearrange data within divs in a container. E.g if we need 3 buttons on our web page and we want them to be placed either in a row or column, we will create a parent div container called buttonContainer and within it have 3 children divs with 3 buttons (btn1,btn2 and btn3). That way we can use CSS to easily display flex  and apply flex direction row or column .i.e 
/* <div class="buttonContainer">
    <div class="button1"> <button> Start</button> 
    </div>;
    <div class="button2"> <button> Stop</button> 
    </div>;
    <div class="button3"> <button>Reset</button> 
    </div>;
</div> */


// Or you can see the connection as, that our wireframe containers from html is what becomes our individual components in react.

import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  return (
    <div className ='ledger'>
         {props.allTodos.map((todo) => {
        return(
           <Todo data={todo}/>
        )
    })}
    </div>  
  )
}

export default TodoList

