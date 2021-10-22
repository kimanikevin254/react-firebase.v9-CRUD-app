import React, { useState, useEffect } from 'react'
import Input from './Input'
import TodosCounter from './TodosCounter'
import { db } from '../firebase'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'

function TodosList() {
    const [todos, setTodos] = useState([])

    //Create a reference to the db... the todos collection
    const todosCollectionRef = collection(db, 'todos')

    //fetch all the todos in real time
    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let tasksArray = []
            querySnapshot.forEach(doc => (
                tasksArray.push({...doc.data(), id:doc.id})
            ))
            setTodos(tasksArray)
        })

        return () => unsub()
    
    }, [])

    //delete a todo
    const deleteTodo = async (id) => {
       await deleteDoc(doc(db, 'todos', id))
    }

    return (
        <div>
            <Input todosCollectionRef={todosCollectionRef} />

            {todos.length === 0 ? 

                <p className='noTasks'>No tasks</p> : 

                <div className="todoList">
                    {todos && todos.map((todo, index) => (
                            <li key={index} className='todoItem'>
                                {todo.task}

                                <span className='delkey'  onClick={() => {
                                deleteTodo(todo.id)
                                }}
                                style={{cursor: 'pointer'}}
                                >X</span>
                            </li>
                    ))}
                </div>
            }

           <hr />

           <div className="todosCounter">
                <TodosCounter todos={todos} /> 
           </div>
        </div>
    )
}

export default TodosList
