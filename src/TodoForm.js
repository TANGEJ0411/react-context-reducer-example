import React, { useState } from 'react'
import { useTodoContext } from './TodoContext';

function TodoForm() {
    const [todoContent, setTodoContent] = useState("")
    const { addTodo } = useTodoContext()
    // console.log(addTodo)
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoContent)
        setTodoContent("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoContent}
                onChange={(e) => { setTodoContent(e.target.value) }}
                placeholder="請輸入" />
        </form>
    )
}

export default TodoForm