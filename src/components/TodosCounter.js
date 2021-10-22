import React from 'react'

function TodosCounter( { todos }) {
    return (
        <div>
            <p>Remaining tasks: {todos.length}</p>
        </div>
    )
}

export default TodosCounter
