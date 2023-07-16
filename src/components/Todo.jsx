import React from 'react'

function Todo(props) {
  return (
    <div>
        <h1 className="todo" >{props.data}</h1>
    </div>
  )
}

export default Todo