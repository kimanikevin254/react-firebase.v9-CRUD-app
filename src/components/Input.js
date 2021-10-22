import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore'

function Input({ todosCollectionRef }) {

    const [input, setInput] = useState('')

    const addTodo = async (e) => {
        e.preventDefault()
        await addDoc(todosCollectionRef, {task: input})
        setInput('')
    }

    return (
        <div>
           <form>
                <input type="text" 
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }} />

                <button type='submit'
                    disabled={!input}
                    onClick={(e) => {
                        addTodo(e)
                    }}>
                        +
                </button>

           </form>
        </div>
    )
}

export default Input
